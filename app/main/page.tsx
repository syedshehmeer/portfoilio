"use client";

import React from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const Main = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
