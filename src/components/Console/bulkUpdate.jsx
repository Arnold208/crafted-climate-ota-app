import React from "react";
import { Select, TextInput, Modal, Group, Button, FileInput } from '@mantine/core';
import classes from "./Global.module.css";
import { FaPlus } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { useDisclosure } from "@mantine/hooks";

const BulkUpdate = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <button

        onClick={open}
        className="flex gap-2 items-center bg-gray-700  hover:bg-gray-400 active:bg-gray-200 text-white font-medium py-2 px-4 rounded-md shadow-md transition-transform transform active:scale-95 focus:outline-none focus:ring focus:border-blue-300"
      >
        <GrUpdate />
        Bulk Firmware Update 
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
          label="Upload Token"
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
        <FileInput accept="image/png,image/jpeg" label="Upload firmware file" placeholder="Upload file" />
         <Group justify="flex-end" mt="md">
        

          <Button 
            type="submit" 
            loading={loading} 
            onClick={toggle}
            loaderProps={{ type: 'dots' }}>
              Update firmware
          </Button>
        </Group>
      </Modal>
    </>
  );
};
export default BulkUpdate;
