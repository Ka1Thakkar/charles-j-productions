'use client'

import { useEffect, useRef } from "react";
import History from "./_components/History";
import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import Navbar from "../_components/Navbar";
import Crew from "./_components/Crew";
import Footer from "@/components/Footer";

const main = () => {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })
    const { scrollYProgress } = useScroll()
    const ref = useRef<HTMLElement>(null)
    return (
        <div className=" scroll-smooth">
            <Navbar progress={scrollYProgress} />
            <History />
            <Crew />
            <Footer />
        </div>
    );
}

export default main;