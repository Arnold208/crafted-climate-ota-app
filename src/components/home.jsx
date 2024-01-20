import React from 'react';

// Components
import Header from './header'
import Footer from './footer'
import HomeHero from './homeHero';
import Services from './services';

const Home = () =>{
  return (
    <>
    <div>
      <Header />
        <HomeHero />
        <Services />
      <Footer />
    </div>
    </>
  )
};

export default Home;