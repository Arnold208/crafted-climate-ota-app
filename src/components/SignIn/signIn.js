import React from "react";
import { useNavigate } from "react-router-dom";

// import '../SignIn/signIn.css';
import logo from "../assets/cc_logo_raw.png";
import signImage from "../assets/cl1.jpeg";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    navigate("/devices");
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${signImage})` }}
      >
        <div className="w-full sm:auto lg:w-1/2 p-5">
          <form className="relative relative z-10 bg-white bg-opacity-50  p-6 rounded-lg ">
            <div className="flex flex-col">
              <div className="">
                <img src={logo} alt="Logo" className="" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 text-center mb-4">
                Admin OTA Portal
              </h1>
              {/* Form inputs */}
              <input
                type="text"
                placeholder="Email or Username"
                className="mb-4 px-4 py-2 border rounded focus:outline-none focus:border-green-500 focus:shadow-md bg-transparent"
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-4 px-4 py-2 border rounded focus:outline-none focus:border-green-500 focus:shadow-md bg-transparent"
              />
              <button
                onClick={handleSignIn}
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
