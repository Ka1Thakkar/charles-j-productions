'use client'
import { useScroll } from 'framer-motion';
import Navbar from '../_components/Navbar';
import Form from './_components/Form'
import { useRef } from 'react';
import Footer from '@/components/Footer';

const Quote = () => {
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