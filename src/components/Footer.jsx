import React from "react";
import { LogoIcon } from "../icons/icon";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white h-14 items-center flex">
      <div className="wrapper-container  w-full">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer text-center items-center">
          Created by:
          <p className="font-semibold ">Greatest of All</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
