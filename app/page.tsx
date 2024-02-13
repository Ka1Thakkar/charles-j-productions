'use client'
import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/about";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Quote from "./_components/Quote";
import Portfolio from "./_components/Portfolio";
import Services from "./_components/Services";
import FAQs from "./_components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "./_components/Navbar";
import { AnimatePresence, useScroll, motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  })
  useEffect(() => {
    document.getElementById('loading')?.addEventListener('ended', () => {
      setIsLoading(false)
    })
  })
  const {scrollYProgress} = useScroll()
  const ref = useRef<HTMLElement>(null)
  return (
    <>
    {/* <AnimatePresence>
      {isLoading && (
        <motion.main initial={{opacity: 1}} animate={{opacity:1}} exit={{opacity: 0}} transition={{duration : 1, delay: 0, ease : 'easeInOut'}} className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
          <video id="loading" autoPlay muted playsInline preload='auto' className="h-[30vh] object-contain object-center absolute">
            <source type="video/mp4" src="/aassets/Loading Logos 2 (faster).mp4" ></source>
          </video>
        </motion.main>
      )}
    </AnimatePresence> */}
    <AnimatePresence>
      {!isLoading && (
        <motion.main initial={{opacity: 0, backgroundColor: 'black'}} animate={{opacity: 1, backgroundColor : 'transparent'}} transition={{delay: 0, duration: 1.5, ease: 'easeInOut'}} ref={ref} className=" w-full min-h-screen">
          <Navbar progress={scrollYProgress} />
          <Hero />
          <About />
          <Quote />
          <Portfolio />
          <Services />
          <FAQs />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
    </>
  )
}
