import React from "react";


// import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items center p-2">
          {/* <div className="flex justify-end text-lg gap-5 items-center"> */}
            <div className="flex items-center  font-bold hover:text-green-500 bg-gray-300 p-2 text-gray-500 rounded">
              <Link to="/docs"> Docs </Link>
            </div>
          {/* </div> */}
        </div>
    </>
  );
};

export default Header;
