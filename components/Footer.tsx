'use client'

import Image from "next/image";
import footerLogo from '@/public/aassets/Yellow PNG (2).png'
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import localFont from "next/font/local";
import { usePortfolioState } from "@/hooks/portfolio-state";
import { useRouter } from "next/navigation";

const headingFont = localFont({src : '../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const Footer = () => {
    return (
        <div className={subheadingFont.className + " relative min-h-screen flex flex-col py-20 justify-center text-[#FFD504]"}>
            <div className="w-full h-full absolute flex items-center justify-center">
                <Image src={footerLogo} alt="Footer Logo" className="h-[50vh] object-contain opacity-[2.5%]" />
            </div>
            <h1 className={" uppercase text-6xl font-bold px-10 md:px-32 pb-10"}>Let's <span className={headingFont.className + ' font-medium text-7xl'}>work</span> together</h1>
            <div className="flex flex-col xl:flex-row px-10 md:px-32 z-30 gap-20 pb-20">
                <div className="xl:w-1/2 flex flex-col gap-10">
                    <p className="text-white text-3xl font-light">
                    Tell us a little about your project! We will get back to you as soon as we can with some ideas of how we can make your project shine.
                    </p>
                    <div className="text-white font-semibold text-3xl flex flex-col gap-2">
                        Write to Us
                        <p className="font-light text-2xl">
                            email@gmail.com
                        </p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Instagram className="h-7 w-7" />
                        <Linkedin className="h-7 w-7" />
                        <Facebook className="h-7 w-7" />
                        <Youtube className="h-7 w-7" />
                    </div>
                </div>
                <div className="xl:w-1/2 flex flex-col gap-10">
                    <h2 className="text-3xl">Send Us a Message</h2>
                    <input type='text' placeholder="Your Name" className="border-b-2 border-[#FFD504] bg-transparent text-2xl font-light outline-none text-white" />
                    <input type='email' placeholder="Your Email" className="border-b-2 border-[#FFD504] bg-transparent text-2xl font-light outline-none text-white" />
                    <input type='text' placeholder="Your Message" className="border-b-2 border-[#FFD504] bg-transparent text-2xl font-light outline-none text-white" />
                </div>
            </div>
            <div className="flex xl:flex-row flex-col-reverse gap-y-10 px-10 md:px-32 justify-between z-20 gap-x-32">
                <div className="xl:flex grid grid-cols-2 justify-between gap-y-10 xl:w-8/12 items-center">
                    {navigation.map((menu, i) => {
                        return (
                            <NavigationElement key={i} id={i} />
                        )
                    })}
                </div>
                <div className="xl:w-4/12 w-full pb-20 xl:pb-0">
                    <h2 className="font-bold text-xl pb-5">Subscribe</h2>
                    <div className=" flex justify-between pb-2 gap-5">
                        <input type='email' placeholder="Enter your Email" className="bg-transparent text-lg font-light outline-none max text-white w-6/12" />
                        <div role="button" className="font-bold text-white text-xl">
                            Sign Up
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-[#FFD504] rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;

const navigation = [
    {
        main : 'Portfolio',
        subMenu : ['Weddings',' Commercials', 'Music Videos'],
    },
    {
        main : 'Testimonials/ Client',
        subMenu : ['Weddings',' Commercials', 'Music Videos'],
    },
    {
        main : 'Get in Touch',
        subMenu : ['Weddings',' Commercials', 'Music Videos'],
    },
    {
        main : 'Book Us',
        subMenu : ['Weddings',' Commercials', 'Music Videos'],
    },
]

interface NavigationElementProps {
    id : number
}

const NavigationElement = ({id} : NavigationElementProps) => {
    const router = useRouter()
    const portfolioState = usePortfolioState()
    const onClick = (menu : string) => {
        portfolioState.setValue(menu)
        router.push('/portfolio')
        console.log(portfolioState.value)
    }
    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">{navigation[id].main}</h2>
            <div className="h-[1px] w-full bg-[#FFD504] rounded-full"></div>
            {/* <div className="flex flex-col gap-5">
                {navigation[id].subMenu.map((menu, key) => {
                    if (navigation[id].main === 'portfolio') {return (
                        <div key={key} onClick={() => portfolioState.setValue(menu)} className="font-light">
                            {menu}
                        </div>
                    )}
                })}
            </div> */}
            {/* {navigation[id].main === 'Portfolio' ? (
                <div className="flex flex-col gap-5">
                {navigation[id].subMenu.map((menu, key) => {
                    return (
                    <div key={key} role="button" onClick={() => onClick(menu)} className="font-light">
                        {menu}
                    </div>)
                })}
            </div>
            ) : (
                <div className="hidden"></div>
            )} */}
        </div>
    );
}