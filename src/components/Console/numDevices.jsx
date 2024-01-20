import React, { useState, useEffect } from "react";
import { Loader } from "@mantine/core";
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

const API_ENDPOINT =
  "https://cctelemetry-dev.azurewebsites.net/ota/list-OTA-devices";

const NumDevices = ({ selectedTab, total, active, inactive }) => {
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch(API_ENDPOINT);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const devicesData = await response.json();
        setDevices(devicesData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDevices();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  // Calculate the number of total, active, and inactive devices
  const totalDevices = devices.length;
  const activeDevices = devices.filter(
    (device) => device.state === true
  ).length;
  const inactiveDevices = devices.filter(
    (device) => device.state === false
  ).length;
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 bg-blue-400 text-white p-6 rounded-lg md:w-1/2 lg:w-1/3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total devices</span>
            <FaLightbulb className="text-xl" />
          </div>
          <span className="text-2xl font-bold">{totalDevices}</span>
        </div>
        <div className="flex-1 bg-green-400 text-white p-6 rounded-lg md:w-1/2 lg:w-1/3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Active devices</span>
            <FaLightbulb className="text-xl" />
          </div>
          <span className="text-2xl font-bold">{activeDevices}</span>
        </div>
        <div className="flex-1 bg-gray-500 text-white p-6 rounded-lg md:w-1/2 lg:w-1/3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Inactive devices</span>
            <FaRegLightbulb className="text-xl" />
          </div>
          <span className="text-2xl font-bold">{inactiveDevices}</span>
        </div>
      </div>
    </>
  );
};

export default NumDevices;
