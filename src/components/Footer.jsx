import React from "react";
import { LogoIcon } from "../icons/icon";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white h-14 items-center flex">
      <div className="wrapper-container  w-full">
        {/* logo */}
        <div className="flex justify-center gap-3 items-center text-center items-center">
          Created by:
          <p className="font-semibold ">
            <a
              href="https://github.com/greatestofal"
              className="text-red-500 cursor-pointer hover:underline"
              target="_blank"
            >
              Greatest of All
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
