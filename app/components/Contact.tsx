"use client";
import React from "react";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="pt-16 flex flex-col min-h-screen bg-gray-50 items-center "
    >
      <div className="w-4/5 md:w-3/5 py-10 flex flex-col items-center flex-wrap  ">
        <h1 className="font-bold text-4xl mb-5">Contact</h1>
        <div className="flex flex-col mt-10 justify-left items-center">
          <div className="h-16 w-16 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mx-5">
            <ImLocation size={30} />
          </div>
          <div className="flex flex-col items-center justify-center mt-5  mt-5  ">
            <h3 className="font-bold">Location</h3>
            <p>Karachi, Pakistan</p>
          </div>
        </div>
        <div className="flex flex-col mt-10 justify-left items-center">
          <div className="h-16 w-16 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mx-5">
            <MdEmail size={30} />
          </div>
          <div className="flex flex-col items-center  mt-5 ">
            <h3 className="font-bold">Email</h3>
            <p>syedshehmeerashfaq@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col mt-10 justify-left items-center">
          <div className="h-16 w-16 flex p-3 bg-white justify-center items-center rounded-full shadow-lg shadow-gray-200 mx-5">
            <FiSmartphone size={30} />
          </div>
          <div className="flex flex-col items-center mt-5 ">
            <h3 className="font-bold">Phone / WhatsApp</h3>
            <p>+923012026706</p>
          </div>
        </div>
      </div>
    </div>
  );
};
