"use-client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "./navbar/page";
import { Footer } from "./footer/page";
import { Main } from "./main/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Main />
      <Footer />
    </main>
  );
}
