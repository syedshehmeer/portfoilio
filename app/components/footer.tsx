"use client";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex flex-col px-10 py-10 justify-around items-center bg-black md:flex-row">
      <h1 className="text-white text-center">
        Copyright © 2023. All rights are reserved
      </h1>
      <div className="flex mt-5 gap-10">
        <a href="https://github.com/syedshehmeer">
          <FaGithub size={25} className="text-white cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/sshehmeer/">
          <FaLinkedinIn size={25} className="text-white cursor-pointer" />
        </a>
      </div>
    </div>
  );
};
