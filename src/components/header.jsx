// // import './header.css'
import React, { useState } from "react";
// import logo from "../assets/cc_logo_raw.png";
import { Link } from "react-router-dom";

// // Links

// // Component
import LoginModal from "./loginModal";

// const Header = () => {

//   return (
//     <>
//       <nav className="flex justify-between items-center px-5 py-2.5 shadow-md">
//         <div>
//           <img src={logo} alt="Crafted Climate Logo" className="w-[220px]" />
//         </div>
//         <div>
//           <ul className="flex items-center gap-12 text-lg font-bold text-gray-500">
//             <li className="hover:text-green-500">
//               <Link to="/"> Home </Link>
//             </li>
//             <li className="hover:text-green-500">
//               <Link to="/case-studies"> Case Studies </Link>
//             </li>
//             <li className="hover:text-green-500">
//               <Link to="/developers"> Developers </Link>
//             </li>
//             <li className="">
//               <LoginModal />
//             </li>
//           </ul>
//         </div>
//       </nav>

//     </>
//   );
// };

// export default Header;

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import logo from "../assets/cc_logo_raw.png";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";



export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();


  return (
    <>
      <Box pb={100}>
        <header className={classes.header}>
          <Group flex="no-wrap" justify="space-between" align="end" padding="50px" h="100%">
            {/* <MantineLogo size={30} /> */}
            <img src={logo} alt="Crafted Climate Logo" className="w-[200px]" />
            <Group h="100%" gap={0} visibleFrom="sm" align="items-center">
              <Link className={classes.link} to="/">
                {" "}
                Home{" "}
              </Link>
              <Link className={classes.link} to="/case-studies">
                {" "}
                Case Studies{" "}
              </Link>
              <Link className={classes.link} to="/developers">
                {" "}
                Developers{" "}
              </Link>
            </Group>

            <Group visibleFrom="sm">
              <LoginModal />
              {/* <Button>Sign up</Button> */}
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Menu"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(80vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            <Link className={classes.link} to="/">
              {" "}
              Home
              {" "}
            </Link>
            <Link className={classes.link} to="/case-studies">
              {" "}
              Case Studies
              {" "}
            </Link>
            <Link className={classes.link} to="/developers">
              {" "}
              Developers
              {" "}
            </Link>
          </ScrollArea>
          <Divider my="sm" />
          <Group justify="center" grow pb="xl" px="md">
            <LoginModal />
            {/* <Button>Sign up</Button> */}
          </Group>
        </Drawer>
      </Box>
    </>
  );
}

export default Header;
