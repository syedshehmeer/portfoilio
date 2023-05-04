"use-client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
