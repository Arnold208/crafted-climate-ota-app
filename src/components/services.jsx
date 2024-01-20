import React from 'react';
import { Link } from 'react-router-dom';
import { GrUpdate } from "react-icons/gr";
import { FaCloud } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
// Components

const Services = () =>{
  return(
    <>
      <div className='bg-gray-200 flex justify-center gap-5 py-[80px]'>
        <div className='flex flex-col justify-center items-center gap-2 p-10 border-white-500'>
          <LuLayoutDashboard/>
          <span>Device Management</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 p-10 border-white-500'>
          <GrUpdate />
          <span>Ota Updates</span>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 p-10 border-white-500'>
          <FaCloud/>
          <span>Rest API</span>
        </div>
      </div>
    </>
  );
};

export default Services;

