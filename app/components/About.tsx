"use client";
import React from "react";

export const About = () => {
  return (
    <div
      id="about"
      className="pt-20 flex flex-col min-h-screen bg-gray-50 items-center "
    >
      <div className="w-4/5 md:w-3/5 py-10 flex flex-wrap justify-center ">
        <h1 className="font-bold text-4xl">About</h1>
        <p className="mt-10 text-xl text-black leading-10 tracking-wide text-center ">
          "I have recently graduated from DHA Suffa University and currently
          open to associate software engineer or developer roles. As an aspiring
          full stack developer, I have honed my skills in the MERN stack through
          my work on my final year project and by creating various web
          applications. With hands-on experience in web development and a strong
          passion for technology, I am eager to apply my expertise to contribute
          to a dynamic and innovative team."
        </p>
      </div>
    </div>
  );
};
