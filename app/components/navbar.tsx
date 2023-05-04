"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="w-full p-5 flex justify-between sticky top-0 h-15 bg-white shadow-lg shadow-gray-200 text-black">
        <strong className="mx-10 font-bolder text-2xl cursor-point  er">
          SSA
        </strong>
        <div className="flex w-1/2 justify-end items-center">
          <a href="SyedShehmeerAshfaq.pdf" download>
            <button className="bg-black text-white px-2 mx-2 rounded items-center justify-center">
              Download CV
            </button>
          </a>
          <ul className="w-3/4 ml-10 hidden flex w-full justify-between pr-10 text-lg font-bold md:flex">
            <Link href="/#home">
              <li className="hover:border-b border-black cursor-pointer mr-5">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="hover:border-b border-black cursor-pointer mr-5">
                About
              </li>
            </Link>
            <Link href="/#projects">
              <li className="hover:border-b border-black cursor-pointer mr-5">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="hover:border-b border-black cursor-pointer mr-5">
                Contact
              </li>
            </Link>
          </ul>
          <button onClick={handleNav}>
            <img
              src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
              alt=""
              className="h-10 w-10 md:hidden"
            />
          </button>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-50 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-50 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <strong className=" font-bolder text-2xl ">SSA</strong>
              <div onClick={handleNav}>
                <AiOutlineClose size={20} className=" cursor-pointer" />
              </div>
            </div>
            <div className="flex w-full ">
              <ul className="w-full items-center my-10 flex flex-col gap-y-10 pr-10 text-lg font-bold ">
                <Link href="/#home">
                  <li className="hover:border-b border-black cursor-pointer py-4">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li className="hover:border-b border-black cursor-pointer py-4">
                    About
                  </li>
                </Link>
                <Link href="/#projects">
                  <li className="hover:border-b border-black cursor-pointer py-4">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li className="hover:border-b border-black cursor-pointer py-4">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
