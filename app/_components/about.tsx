'use client'
import Image from "next/image";
import about from '@/public/aassets/where passion meet 2.png'
import image from '@/public/Home Page Zoom Photo.png'
import { Almarai, Anybody } from "next/font/google";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import localFont from 'next/font/local'
import Link from "next/link";
import { cn } from "@/lib/utils";
// import font from '../../public/Fonts/Nirvana-Font' 

const headingFont = localFont({ src: '../../public/Fonts/Nirvana-Font/NIRVANA.woff2' })

const subheadingFont = localFont({ src: '../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2' })

const About = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1])
    return (
        <div className={cn(subheadingFont.className, "flex flex-col items-center justify-center py-20")}>
            <div className="flex flex-col min-h-[50vh] items-center md:px-32 gap-10 py-20 px-10 justify-between transition-all ease-in-out">
                <div className="transition-all ease-in-out">
                    <h1 className={headingFont.className + " 2xl:text-9xl text-7xl text-center xl:text-left text-[#FFE812] font-medium"}>
                        Where Passion & Media Meet
                    </h1>
                </div>
                <Link href={"/about-us"}>
                    <div role="button" className="text-white text-lg font-semibold border-[#FFE812] border-2 py-2 px-5 rounded-full hover:bg-[#FFE812] hover:text-black transition-all ease-in-out">
                        Learn More
                    </div>
                </Link>
            </div>
            <div ref={ref} className="overflow-hidden w-11/12 rounded-3xl">
                <motion.div style={{ scale: scale }} className="w-full h-full">
                    <Image src={image} alt="image" className="w-full xl:h-[75vh] xl:object-cover h-[50vh] object-cover" />
                </motion.div>
            </div>
        </div>
    );
}

export default About;