import React, { useState, useEffect } from 'react';
import './device.css';  
import logo from '../assets/cc_logo_raw.png';  
import { useNavigate } from 'react-router-dom';

const categorizeDevices = (devices) => {
    const categories = {
        'env-gsm': [],
        'env-lora': [],
        'air-gsm': [],
        'air-lora': []
    };

    devices.forEach(device => {
        if (categories[device.type]) {
            categories[device.type].push(device);
        }
    });

    return categories;
};

  
const Devices = () => {
    const [serverResponse, setServerResponse] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [devices, setDevices] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');
    const totalDevices = devices.length;  
    const activeDevices = devices.filter(device => device.state).length;  
    const inactiveDevices = totalDevices - activeDevices; 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/add/list-OTA-devices');
            const data = await response.json();
            setDevices(data);
        };

        fetchData();
        const interval = setInterval(fetchData, 10000);  
        return () => clearInterval(interval);
    }, []);

 
    const filteredDevices = searchTerm
        ? devices.filter(device => device.eid.includes(searchTerm))
        : devices;

    const categorizedAndFilteredDevices = categorizeDevices(filteredDevices);

    const handlefirmware = (event) => {
        event.preventDefault();
        navigate('/firmware');
      };
      
    const handleSubmit = async (event) => {
        event.preventDefault();
        setServerResponse(null);
        setErrorMessage('');
    
        const formData = {
          eid: document.getElementById('deviceId').value,
          type: document.getElementById('target').value,
        };
    
        try {
          const response = await fetch('http://localhost:3000/add/add-OTA-device', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
    
          if (!response.ok) {
             throw new Error(data.error || 'Error submitting form');
          }
    
           if (data.apikey) {
            setDevices([...devices, data]); 

            setServerResponse(data);
          } else {
             setErrorMessage('Device already exists');
          }
        } catch (error) {
          setErrorMessage(error.message);
        }
    };
  return (
    <div className="devices-page">
      <nav className="navbar">
        <img src={logo} alt="Left Logo" className="navbar-logo" />
        <span className="navbar-title">CC OTA SERVICE</span>
        {/* <img src= {logo} alt="Right Logo" className="navbar-logo right" /> */}
        <button onClick={handlefirmware} className="firmware-button">UPLOAD FIRMWARE TO DEVICE</button>

       </nav>
      <header className="devices-header">
        <h1>Add Device</h1>
        <span className="add-icon">+</span> 
      </header>
      <form className="device-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="deviceName">Device Name</label>
        <input type="text" id="deviceName" />
      </div>

      <div className="form-group">
        <label htmlFor="deviceId">Device ID</label>
        <input type="text" id="deviceId" />
      </div>

      <div className="form-group">
        <label htmlFor="target">Target</label>
        <select id="target">
          <option value="air-gsm">AIR-GSM</option>
          <option value="air-lora">AIR-LORA</option>
          <option value="env-gsm">ENV-GSM</option>
          <option value="env-lora">ENV-LORA</option>

         </select>
      </div>

      <button type="submit" className="add-button">Add</button>
    </form>

    {serverResponse && (
                <div className="response-container">
                    <p>Device creation successful!</p>
                    <p>Your API Key for OTA connection: <strong>{serverResponse.apikey}</strong></p>
                    <p className="warning">Please keep this API Key safe and secure.</p>
                </div>
            )}

            {errorMessage && (
                <div className="error-container">
                    <p>{errorMessage}</p>
                </div>
            )}
<h1>Devices</h1>
<div className="search-and-count">
    <input 
        type="text" 
        className="search-input"
        placeholder="Search by ID..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div className="device-count">
        Total Devices: {totalDevices}
    </div>

    <div className="active-count">
        Active Devices: {activeDevices}
    </div>

    <div className="inactive-count">
        Inactive Devices: {inactiveDevices}
    </div>
</div>

<div className="device-columns">
                {Object.entries(categorizedAndFilteredDevices).map(([type, devices]) => (
                    <div key={type} className="device-column">
                        <h2>{type.toUpperCase()}</h2>
                        {devices.map(device => (
                            <div key={device._id} className="device-card">
                                 <p>Type: {device.type}</p>
                                <p>ID: {device.eid}</p>
                                <p>Created: {new Date(device.created).toLocaleString()}</p>
                                <p>Status: {device.state ? 'Active' : 'Inactive'}</p>
                                <p>API Key: {device.apikey}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
    </div>
  );
};

export default Devices;
