import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../SignIn/signIn.css';
import logo from '../assets/cc_logo_raw.png';  


const SignIn = () => {
    const navigate = useNavigate();

    const handleSignIn = (event) => {
      event.preventDefault();
      navigate('/devices');
    };
  
    return (
      <div className="signin-container">
        <div className="signin-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="signin-logo" />
          </div>
          <h1 className="signin-title">Admin OTA Portal</h1>
          <form className="signin-form">
            <input type="text" placeholder="Email or Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleSignIn} type="submit">Sign In</button>
          </form>
          
        </div>
      </div>
    );
  };
  
  
   

export default SignIn;