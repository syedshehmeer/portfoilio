"use client";

import Image from "next/image";
import React from "react";
import {
  FaCss3,
  FaExpand,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCss3,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
export const Header = () => {
  return (
    <div
      id="home"
      className="flex flex-col min-h-screen bg-gray-100 justify-center items-center "
    >
      <div className="w-4/5 md:w-3/5 flex flex-col-reverse justify-center items-center lg:flex-row">
        <div className="w-full py-10 flex flex-wrap  ">
          <h1 className="font-extrabold text-5xl">MERN Stack Developer,</h1>
          <p className="mt-5 text-xl text-gray-400">
            Hi, I'm Syed Shehmeer Ashfaq. An aspiring full stack developer,
            working in MERN and NextJs.
          </p>
        </div>
        <div className="flex justify-center m-5 items-center">
          <Image
            src="/SSA.jpeg"
            width="400"
            height="400"
            alt="photo"
            className="object-fit min-h-300px rounded-full border justify-center"
          />
        </div>
      </div>
      <div className="w-4/5 md:w-3/5 my-10  flex flex-col justify-center items-center lg:flex-row">
        <p className="font-bold text-xl mr-10">Tech Stack</p>
        <div className=" flex flex-wrap justify-center items-center my-5">
          <div className="h-14 w-14 mb-3 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mr-5">
            <FaReact size={30} className="text-blue-400" />
          </div>
          <div className="h-14 w-14 mb-3 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mr-5">
            <SiExpress size={30} className="text-black" />
          </div>
          <div className="h-14 w-14 mb-3 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mr-5">
            <FaNodeJs size={30} className="text-green-800" />
          </div>
          <div className="h-14 w-14 mb-3 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mr-5">
            <SiMongodb size={30} className="text-green-600" />
          </div>
          <div className="h-14 w-14 mb-3 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mr-5">
            <SiNextdotjs size={30} className="text-black" />
          </div>
          <div className="h-14 w-14 mb-3 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mr-5">
            <SiTailwindcss size={30} className="text-blue-500" />
          </div>
          <div className="h-14 w-14 mb-3 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mr-5">
            <FaHtml5 size={30} className="text-orange-500" />
          </div>
          <div className="h-14 w-14 mb-3 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mr-5">
            <SiCss3 size={30} className="text-blue-700" />
          </div>
          <div className="h-14 w-14 mb-3 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mr-5">
            <FaJs size={30} className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
