import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn/signIn';
import Devices from './components/Device/device';
import Firmware from './components/Firmware/firmware';

 
function App() {
  
  return (
    <Router>
           <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/firmware" element={<Firmware />} />
          </Routes>
      </Router>
  );
}


export default App;
