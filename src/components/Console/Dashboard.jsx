import React from "react";
import { AppShell, Burger, Flex, Group } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import {Link, Outlet } from "react-router-dom";
import Header from "./head";
import Sidebar from "./side";
import logo from "../../assets/cc_logo_raw.png";

export function Dashboard() {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <AppShell
      header={{ height: 100 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group
          h="100%"
          justify="space-between"
          wrap="no-wrap"
          align="items-center"
        >
          <Group h="100%" px="md">
            <div className="flex items-center gap-2">
            <Link to="/dashboard">
              <img
                src={logo}
                alt="Crafted Climate Logo"
                className="w-[150px]"
              />
            </Link>
            </div>
          </Group>
          <Group h="100%" px="md" wrap="no-wrap">
            <Header />
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-gray-500 font-bold text-lg">{pageTitle}</h1>
          <Outlet />
        </div>
      </AppShell.Main>
    </AppShell>
  );
}

const getPageTitle = (pathname) => {
  switch (pathname) {
    case "/dashboard":
      return "Dashboard";
    case "/dashboard/devices":
      return "Devices";
    case "/dashboard/data":
      return "Data";
    case "/dashboard/keys":
      return "Keys";
    default:
      return "Unknown Page";
  }
};
export default Dashboard;
