"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { ProjectCard } from "./ProjectCard";

const data = [
  {
    name: "NoonApp",
    description:
      "Built an ecommerce application from scratch, based on a popular Middle Eastern web application. I created a user-friendly interface with advanced functionality, secure payments, and authorization. Through this project, I honed my technical skills in developing scalable and high-performance web applications using the MERN stack.",
    mediaSrc: "/NoonApp.mp4",
    mediatype: "video",
    techStack: ["React", "Express", "NodeJS", "MongoDB", "CSS"],
    codeLink: "https://github.com/syedshehmeer/ecommerce-app",
    demoLink: "https://noon-r7qk.onrender.com/",
  },
  {
    name: "FYP",
    description:
      "Built a MERN-based platform for booking paid virtual meetups with notable personalities. Featuring secure payments, real-time video calls, and a streamlined booking system, the application offers a seamless and engaging user experience.",
    mediaSrc: "/FYP.mp4",
    mediatype: "video",
    techStack: ["React", "Express", "NodeJS", "MongoDB", "CSS"],
    codeLink: "https://github.com/syedshehmeer/backend-fanclub",
    demoLink: "https://frontend-fanclub.onrender.com/",
  },
  {
    name: "Safety Equipment Detection",
    description:
      "Developed a frontend for an AI application on desktop using flutter. It was a safety equipment detection and monitoring application.",
    mediaSrc: "/safety_equipment_detection.jpeg",
    mediatype: "image",
    techStack: ["Flutter", "Dart"],
    codeLink: "no-code",
    demoLink:
      "https://portfolio-syedshehmeer.vercel.app/safety_equipment_detection.jpeg",
  },
  {
    name: "Factory Monitoring Application",
    description:
      "Developed a frontend for a desktop factory monitoring application, which was developed to monitor and manage the activities of the factory.",
    mediaSrc: "/factory_monitoring.png",
    mediatype: "image",
    techStack: ["Flutter", "Dart"],
    codeLink: "no-code",
    demoLink:
      "https://portfolio-syedshehmeer.vercel.app/factory_monitoring.png",
  },
];

export const Projects = () => {
  return (
    <div
      id="projects"
      className="pt-20 flex flex-col min-h-screen bg-gray-100 items-center "
    >
      <div className="w-4/5 md:w-3/5 py-10 flex flex-wrap justify-center ">
        <h1 className="font-bold text-4xl">Projects</h1>
        {data.map((project) => {
          return (
            <div className="flex flex-col lg:flex-row w-full mt-10  rounded-xl shadow-lg shadow-gray-400">
              <div className="w-full lg:w-3/5 flex items-center">
                {project.mediatype === "video" ? (
                  <video
                    src={project.mediaSrc}
                    autoPlay
                    loop
                    muted
                    className="p-2 rounded-xl shadow-md shadow-gray-200 brightness-80"
                  ></video>
                ) : (
                  <img
                    src={project.mediaSrc}
                    alt=""
                    className="p-2 rounded-xl shadow-md  shadow-gray-200 brightness-80"
                  />
                )}
              </div>
              <div className="w-full lg:w-2/5 flex flex-col  py-10 items-center p-2">
                <h3 className=" font-bold">{project.name}</h3>
                <p className="m-5 text-gray-500 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center mx-2">
                  {project.techStack.map((tech) => {
                    return (
                      <h4 className="px-2 m-2 shadow-sm shadow-gray-400 rounded">
                        {tech}
                      </h4>
                    );
                  })}
                </div>
                <div className="my-5 flex">
                  {project.codeLink === "no-code" ? (
                    <div className="flex items-center text-gray-400">
                      <h3>Code</h3>
                      <FaGithub size={20} className="mx-3 h-6 w-6" />
                    </div>
                  ) : (
                    <a href={project.codeLink}>
                      <div className="flex items-center cursor-pointer hover:text-gray-400">
                        <h3>Code</h3>
                        <FaGithub size={20} className="mx-3 h-6 w-6" />
                      </div>
                    </a>
                  )}

                  <a href={project.demoLink}>
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
        })}
      </div>
    </div>
  );
};
