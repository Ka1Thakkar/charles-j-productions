'use client'
import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/about";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Quote from "./_components/Quote";
import Portfolio from "./_components/Portfolio";
import Services from "./_components/Services";
import FAQs from "./_components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "./_components/Navbar";
import { useScroll } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  })
  const {scrollYProgress} = useScroll()
  const ref = useRef<HTMLElement>(null)
  return (
    <main ref={ref} className=" w-full min-h-screen">
      <Navbar progress={scrollYProgress} />
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
