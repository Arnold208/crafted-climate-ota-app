import React from 'react';

import { Card, Overlay, Button, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import classes from "./HeaderMegaMenu.module.css";
export function HomeHero() {
  return (
    <Card className={classes.card}>
      <a className="text-gray-100 opacity-[0.3]" href="https://www.freepik.com/free-vector/saving-earth-with-artificial-technology_6840281.htm#query=internet%20of%20things%20with%20natuer%20background&position=0&from_view=search&track=ais&uuid=c5f7b3ae-3304-4133-be91-196fe2b3ed2e">Image by pikisuperstar on Freepik</a> 
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Text fw={700} className={classes.title}>
        <span className='text-[30px] sm:text-[40px] md:text-[60px] lg:text-[80px]'>Innovating Solutions, <br />Building a Greener Tomorrow</span>
        </Text>

        <Text className={classes.description}>
        <span className='text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px]'>Welcome to Crafted Climate: Pioneering a Sustainable Tomorrow through Innovation</span>
        </Text>

        <Link to='/dashboard'>
          <Button  className={classes.action} variant="white" color="dark" size="md">
            Manage Devices Now
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default HomeHero;
