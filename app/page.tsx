'use client'
import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/about";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Quote from "./_components/Quote";
import Portfolio from "./_components/Portfolio";
import Services from "./_components/Services";
import FAQs from "./_components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  })
  return (
    <main className=" w-full min-h-screen">
      <Hero />
      <About />
      <Quote />
      <Portfolio />
      <Services />
      <FAQs />
      <Footer />
    </main>
  );
}
