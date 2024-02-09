'use client'
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import Categories from "./_components/Categories";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const headingFont = localFont({src : '../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const Portfolio = () => {
    useEffect(() => {
        const lenis = new Lenis()
    
        function raf(time: any) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    })
    return (
        <main>
            <Categories />
            <Footer />
        </main>
    );
}
 
export default Portfolio;