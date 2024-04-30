import React from "react";
import { LogoIcon } from "../icons/icon";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white h-14 items-center flex">
      <div className="wrapper-container  w-full">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <Link to={"/"}>
            <LogoIcon />
          </Link>
          <p className="font-semibold">
            <span className="text-red-500">C</span>ypto
            <span className="text-red-500">U</span>pdate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
