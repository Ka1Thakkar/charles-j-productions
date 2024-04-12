'use client'

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import Navbar from "../_components/Navbar";
import Footer from "@/components/Footer";
import Form from "./components/Form";

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
        <>
            <Navbar progress={scrollYProgress} />
            <Form />
            <Footer />
        </>
    );
}

export default main;