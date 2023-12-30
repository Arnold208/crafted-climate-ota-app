import React, { useState } from 'react';
import './firmware.css';
import logo from '../assets/cc_logo_raw.png';

const Firmware = () => {
    const [file, setFile] = useState(null);
    const [target, setTarget] = useState('');
    const [version, setVersion] = useState('');
    const [changes, setChanges] = useState('');
    const [uploadToken, setUploadToken] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('target', target);
        formData.append('version', version);
        formData.append('changes', changes);

        setUploadStatus('Uploading...');

        try {
            const response = await fetch('http://localhost:3000/firmware/upload-firmware', {
                method: 'POST',
                headers: {
                    'X-API-KEY': uploadToken,
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('File upload failed');
            }

            setUploadStatus('Upload successful!');
        } catch (error) {
            setUploadStatus(`Error: ${error.message}`);
        }
    };

    return (
        <div className="firmware-upload">
            <nav className="navbar">
        <img src={logo} alt="Left Logo" className="navbar-logo" />
       </nav>
            <h1>Firmware Upload</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Target</label>
                    <select value={target} onChange={e => setTarget(e.target.value)}>
                        <option value="">Select a Target</option>
                        <option value="env-gsm">ENV-GSM</option>
                        <option value="env-lora">ENV-LORA</option>
                        <option value="air-gsm">AIR-GSM</option>
                        <option value="air-lora">AIR-LORA</option>
                     </select>
                </div>
                <div className="form-group">
                    <label>Version</label>
                    <input type="text" value={version} onChange={e => setVersion(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Changes</label>
                    <textarea value={changes} onChange={e => setChanges(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label>Upload Token</label>
                    <input type="text" value={uploadToken} onChange={e => setUploadToken(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Firmware File</label>
                    <input type="file" onChange={e => setFile(e.target.files[0])} />
                </div>
                <button type="submit" className="upload-button">Upload Firmware</button>
            </form>
            <p>{uploadStatus}</p>
        </div>
    );
};

export default Firmware;
