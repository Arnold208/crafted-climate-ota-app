import React, { useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import classes from "./Global.module.css";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { FaPlus } from "react-icons/fa";
import {
  Select,
  TextInput,
  Checkbox,
  Button,
  Box,
  Modal,
  Group,
  Card,
  Text,
  Badge,
  useMantineTheme,
  FileInput
} from "@mantine/core";
import { MdDevices } from "react-icons/md";
import NumDevices from "./numDevices";
import AddDevices from "./addDevices";
import BulkUpdate from "./bulkUpdate";

const API_ENDPOINT =
  "https://cctelemetry-dev.azurewebsites.net/ota/list-OTA-devices";

const Devices = () => {
  const [error, setError] = useState(null);

  const [serverResponse, setServerResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [devices, setDevices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // const fetchDevices = async () => {
    //   try {
    //     // Fetch data from your endpoints
    //     const endpoint1 = 'https://cctelemetry-dev.azurewebsites.net/ota/list-OTA-devices';
    //     const endpoint2 = 'https://cctelemetry-dev.azurewebsites.net/all-devices';

    //     const response1 = await fetch(endpoint1);
    //     const response2 = await fetch(endpoint2);

    //     const data1 = await response1.json();
    //     const data2 = await response2.json();

    //     // Combining  the data
    //     const combinedDevices = [...data1, ...data2];

    //     // Update state to trigger a re-render
    //     setDevices(combinedDevices);
    //   } catch (error) {
    //     console.error('Error fetching devices:', error);
    //   }
    // };

    // Call the function to fetch devices
  //   fetchDevices();
  // }, []);
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
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServerResponse(null);
    setErrorMessage("");

    const formData = {
      eid: document.getElementById("deviceId").value,
      type: document.getElementById("target").value,
    };

    try {
      const response = await fetch("http://localhost:3000/add/add-OTA-device", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error submitting form");
      }

      if (data.apikey) {
        setDevices([...devices, data]);

        setServerResponse(data);
      } else {
        setErrorMessage("Device already exists");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <NumDevices />
      <div className="flex flex-col gap-2">
        <div className="flex justify-end">
          <div className="flex gap-2 flex-nowrap">
            <AddDevices />
            <BulkUpdate />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {devices.map((device) => (
            <Card key={device.id}>
              <div className="w-full flex flex-col h-full justify-between border border-gray-300 p-2 rounded-lg">
                <div className="flex justify-between items-center">
                  <Text size="lg" weight={700} className="mb-2">
                    {device.type || "None specified"}
                  </Text>
                  <Badge color={device.state ? "green" : "red"}>
                    {device.state ? "Active" : "Inactive"}
                  </Badge>
                </div>
                <div>
                  <Text size="sm" color="gray" className="mt-2">
                    Type: {device.type || "None specified"}
                  </Text>
                  <Text size="sm" color="gray" className="mt-2">
                    Loaction: {device.location || "None specified"}
                  </Text>
                  <Text size="sm" color="gray" className="mt-2">
                    Created: {new Date(device.created).toLocaleString()}
                  </Text>
                </div>
                <Button
                  className="mt-4"
                  variant="outline"
                  color={device.state ? "green" : "red"}
                  leftIcon={<MdDevices />}
                  onClick={() => {
                    modals.open({
                      title: "Manage Device",
                      children: (
                        <>
                          <TextInput
                            label="Device name"
                            placeholder="Env....."
                            classNames={classes.TextInput}
                          />
                          <TextInput
                            label="Device ID"
                            placeholder="Id here...."
                            classNames={classes.TextInput}
                          />

                          <Select
                            mt="md"
                            comboboxProps={{ withinPortal: true }}
                            data={[
                              "AIR-GASM",
                              "AIR-LORA",
                              "ENV-GSM",
                              "ENV-LORA",
                            ]}
                            placeholder="Pick one"
                            label="Target"
                            classNames={classes.Select}
                          />
                          <FileInput
                            accept="image/png,image/jpeg"
                            label="Upload firmware file"
                            placeholder="Upload file"
                          />

                          <Button
                            fullWidth
                            onClick={() => modals.closeAll()}
                            mt="md"
                          >
                            Change
                          </Button>
                        </>
                      ),
                    });
                  }}
                >
                  Manage device
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Devices;
