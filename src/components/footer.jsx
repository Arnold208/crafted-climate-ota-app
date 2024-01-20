import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-400 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Your Company Name &copy; {new Date().getFullYear()}
        </p>
        <div className="mt-2">
          <a
            href="#"
            className="text-white-400 hover:text-white mx-2 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white-400 hover:text-white mx-2 transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { Container, Group, Anchor } from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
// import classes from './FooterSimple.module.css';

// const links = [
//   { link: '#', label: 'Contact' },
//   { link: '#', label: 'Privacy' },
//   { link: '#', label: 'Blog' },
//   { link: '#', label: 'Careers' },
// ];

// export function FooterSimple() {
//   const items = links.map((link) => (
//     <Anchor<'a'>
//       c="dimmed"
//       key={link.label}
//       href={link.link}
//       onClick={(event) => event.preventDefault()}
//       size="sm"
//     >
//       {link.label}
//     </Anchor>
//   ));

//   return (
//     <div className={classes.footer}>
//       <Container className={classes.inner}>
//         <MantineLogo size={28} />
//         <Group className={classes.links}>{items}</Group>
//       </Container>
//     </div>
//   );
// }