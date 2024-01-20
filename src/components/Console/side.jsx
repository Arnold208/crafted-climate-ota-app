import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import classes from './Global.module.css';

import {
  TextInput,
  Divider,
  rem,
} from '@mantine/core';
import { IconSearch, IconGauge, IconDeviceImac, IconClipboardData, IconSquareKey } from '@tabler/icons-react';

const Sidebar = () => {
  const location = useLocation();

  const tabs = [
    { label: 'Dashboard', icon: IconGauge, link: '/dashboard' },
    { label: 'Devices', icon: IconDeviceImac, link: '/dashboard/devices' },
    { label: 'Data', icon: IconClipboardData, link: '/dashboard/data' },
    { label: 'Keys', icon: IconSquareKey, link: '/dashboard/keys' },
  ];

  return (
    <nav className="flex flex-col gap-5 ">
      <TextInput
        placeholder="Search device by ID.."
        size="xs"
        leftSection={<IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />}
        rightSectionWidth={70}
        styles={{ section: { pointerEvents: 'none' } }}
        mb="sm"
      />
      <div className="flex flex-col text-green-600 text-lg font-bold mb-10">
        {tabs.map((tab, index) => (
          <Link
            to={index === 0 ? '/dashboard' : tab.link}
            key={tab.label}
            className={location.pathname === (index === 0 ? '/dashboard' : tab.link) ? 'w-full bg-blue-400 text-white rounded' : ''}
          >
            <div className="flex items-center gap-2 p-2 hover:bg-blue-100 rounded">
              {React.createElement(tab.icon)}
              <span>{tab.label}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-end">
      </div>
    </nav>
  );
};

export default Sidebar;
