import React, { useState, useEffect } from "react";
import { Table } from "@mantine/core";

const API_ENDPOINT =
  "https://cctelemetry-dev.azurewebsites.net/all-devices";

const Data = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  const info = [];

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch(API_ENDPOINT);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const devicesData = await response.json();
        setData(devicesData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDevices();
  }, []);

  const rows = data.map((dat) => (
    <Table.Tr key={data._id}>
      <Table.Td>{dat.eid}</Table.Td>
      <Table.Td>{dat.location}</Table.Td>
      <Table.Td>{dat.type}</Table.Td>
      <Table.Td>{dat.temperature}</Table.Td>
      <Table.Td>{dat.humidity}</Table.Td>
      <Table.Td>{dat.pressure}</Table.Td>
      <Table.Td>{dat.lux}</Table.Td>
      <Table.Td>{dat.pm1}</Table.Td>
      <Table.Td>{dat.pm2}</Table.Td>
      <Table.Td>{dat.pm10}</Table.Td>
      <Table.Td>{dat.sound}</Table.Td>
      <Table.Td>{dat.battery}</Table.Td>
      <Table.Td>{new Date(dat.date).toLocaleString()}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Device ID</Table.Th>
          <Table.Th>Location</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Temperature</Table.Th>
          <Table.Th>Humidity</Table.Th>
          <Table.Th>Pressure</Table.Th>
          <Table.Th>Lux</Table.Th>
          <Table.Th>PM1</Table.Th>
          <Table.Th>PM2</Table.Th>
          <Table.Th>PM10</Table.Th>
          <Table.Th>Sound</Table.Th>
          <Table.Th>Battery</Table.Th>
          <Table.Th>Date</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>Scroll page to see sticky thead</Table.Caption>
    </Table>
    </>
  );
};

export default Data;