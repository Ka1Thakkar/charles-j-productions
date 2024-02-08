'use client'
import Image from "next/image";
import about from '@/public/aassets/where passion meet 2.png'
import image from '@/public/about image.png'
import { Almarai, Anybody } from "next/font/google";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import localFont from 'next/font/local'
// import font from '../../public/Fonts/Nirvana-Font' 

const headingFont = localFont({src : '../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const About = () => {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({target : ref, offset : ['start end', 'end 0vh']})
    const scale = useTransform(scrollYProgress, [0,1], [2,1])
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="flex xl:flex-row flex-col min-h-[50vh] items-center md:px-32 gap-20 md:gap-10 py-20 px-10 justify-between">
                <div className="xl:w-7/12">
                    <h1 className={headingFont.className + " 2xl:text-8xl text-7xl text-center xl:text-left text-[#FFD504] font-medium"}>
                        Where Passion & Media Meet
                    </h1>
                </div>
                <div className={subheadingFont.className + ' xl:w-5/12'}>
                    <h1 className="uppercase text-[#FFD504] font-extrabold text-4xl pb-5">
                        About Us
                    </h1>
                    <p className="text-white font-light text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. Fusce placerat, nunc quis dictum venenatis, sem lectus malesuada libero, a varius ipsum purus eu justo. Mauris nec gravida sem, a venenatis turpis. Nunc mattis elit dui, quis laoreet ipsum finibus lobortis. Sed lobortis viverra sapien vitae rutrum.
                    <br />
                    <br />
                    Nam ac justo libero. Nulla non ipsum scelerisque, interdum nunc id, sodales urna. Ut eleifend sed orci id convallis. Maecenas sed metus scelerisque, lacinia orci eget, euismod lacus. Nullam sit amet cursus orci, in tincidunt sapien. Praesent imperdiet est viverra ipsum ultrices dictum. Nullam nulla augue, varius eu mollis et, bibendum in nisl. Vestibulum fermentum ultricies elit, vitae tincidunt ipsum rutrum nec.
                    </p>
                </div>
            </div>
            <div ref={ref} className="overflow-hidden w-11/12 rounded-3xl">
                <motion.div style={{scale: scale}} className="w-full h-full">
                    <Image src={image} alt="image" className="w-full xl:h-full xl:object-contain h-[50vh] object-cover" />
                </motion.div>
            </div>
        </div>
    );
}
 
export default About;