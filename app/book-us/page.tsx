'use client'
import Footer from "@/components/Footer";
import Navbar from "../_components/Navbar";
import DiscoveryMeeting from "./_components/Discovery";
import Hero from "./_components/Hero";
import { useScroll } from "framer-motion";

const BookUs = () => {
    const {scrollYProgress} = useScroll()
    return (
        <main>
            <Navbar progress={scrollYProgress} />
            <Hero />
            <DiscoveryMeeting />
            <Footer />
        </main>
    );
}
 
export default BookUs;