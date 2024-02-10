'use client'
import { useScroll } from 'framer-motion';
import Navbar from '../_components/Navbar';
import Form from './_components/Form'
import { useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import Lenis from '@studio-freight/lenis';

const Quote = () => {
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
        <main ref={ref}>
            <Navbar progress={scrollYProgress} />
            <Form />
            <Footer />
        </main>
    );
}
 
export default Quote;