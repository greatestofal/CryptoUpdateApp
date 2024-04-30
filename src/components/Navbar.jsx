import React from "react";
import { LogoIcon } from "../icons/icon";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 text-white h-14 items-center flex">
      <div className="wrapper-container  w-full">
        {/* logo */}
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <LogoIcon />
          <p className="font-semibold">
            <span className="text-red-500">L</span>ive
            <span className="text-red-500"> C</span>ypto
            <span className="text-red-500"> M</span>arket
            <span className="text-red-500"> U</span>pdate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
