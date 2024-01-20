import React from "react";
import { Select, TextInput, Modal, Group, Button } from "@mantine/core";
import classes from "./Global.module.css";
import { FaPlus } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";

const AddDevices = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <button
        onClick={open}
        className="flex gap-2 items-center bg-blue-500 text-white  hover:bg-blue-400 active:bg-blue-200  font-medium py-2 px-4 rounded-md shadow-md transition-transform transform active:scale-95 focus:outline-none focus:ring focus:border-gray-300"
      >
        <FaPlus />
        Add device
      </button>
      <Modal
        opened={opened}
        onClose={close}
        title="Add a device"
        yOffset="1vh"
        xOffset={0}
      >
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
          data={["AIR-GASM", "AIR-LORA", "ENV-GSM", "ENV-LORA"]}
          placeholder="Pick one"
          label="Target"
          classNames={classes.Select}
        />
         <Group justify="flex-end" mt="md">
          <Button type="submit">Add</Button>
        </Group>
      </Modal>
    </>
  );
};
export default AddDevices;
