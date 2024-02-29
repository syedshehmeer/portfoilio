import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-10  rounded-xl shadow-lg shadow-gray-400">
      <div className="w-full lg:w-3/5 flex items-center">
        <video
          src="/NoonApp.mp4"
          autoPlay
          loop
          muted
          className="p-2 rounded-xl shadow-md shadow-gray-200 brightness-80"
        ></video>
      </div>
      <div className="w-full lg:w-2/5 flex flex-col items-center p-2">
        <h3 className=" font-bold">NoonApp</h3>
        <p className="m-5 text-gray-500 text-center">
          Built an ecommerce application from scratch, based on a popular Middle
          Eastern web application. I created a user-friendly interface with
          advanced functionality, secure payments, and authorization. Through
          this project, I honed my technical skills in developing scalable and
          high-performance web applications using the MERN stack.
        </p>
        <div className="flex flex-wrap justify-center mx-2">
          <h4 className="px-2 m-2 shadow-sm shadow-gray-400 rounded">React</h4>
          <h4 className="px-2 m-2 shadow-sm shadow-gray-400 rounded">
            Express
          </h4>
          <h4 className="px-2 m-2 shadow-sm shadow-gray-400 rounded">NodeJs</h4>
          <h4 className="px-2 m-2 shadow-sm shadow-gray-400 rounded">
            MongoDB
          </h4>
          <h4 className="px-2 m-2 shadow-sm shadow-gray-400 rounded">CSS</h4>
        </div>
        <div className="my-5 flex">
          <a href="https://github.com/syedshehmeer/ecommerce-app">
            <div className="flex items-center cursor-pointer hover:text-gray-400">
              <h3>Code</h3>
              <FaGithub size={20} className="mx-3 h-6 w-6" />
            </div>
          </a>
          <a href="https://noon-r7qk.onrender.com/">
            <div className="flex items-center cursor-pointer hover:text-gray-400">
              <h3>Demo</h3>
              <BiLinkExternal size={20} className="mx-3 h-6 w-6" />
            </div>
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};
