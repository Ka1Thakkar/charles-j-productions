'use client'
import Image from "next/image";
import logo from '@/public/aassets/Yellow PNG (2).png'

import { Almarai } from "next/font/google";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MotionValue, useTransform, motion, useMotionValue, useInView, cubicBezier, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mails, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const headingFont = localFont({ src: '../../public/Fonts/Nirvana-Font/NIRVANA.woff2' })

const subheadingFont = localFont({ src: '../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2' })

interface NavbarProps {
    progress?: MotionValue
}

const Navbar = ({ progress }: NavbarProps) => {
    const [isHam, setIsHam] = useState(false)
    const onClick = () => {
        setIsHam(!isHam)
    }
    const router = useRouter()
    let opacity = useMotionValue(1)
    if (progress !== undefined) {
        opacity = useTransform(progress, [0, 0.1], [0, 1])
    }
    return (
        <motion.nav style={{ display: '-webkit-flex', WebkitJustifyContent: 'space-between' }} className={subheadingFont.className + " fixed top-0 z-[999] w-[100vw] text-[#FFE812] flex justify-between py-2 overflow-hidden items-center"}>
            <motion.div style={{ opacity: opacity }} className="absolute w-full h-full bg-[#191416] top-0"></motion.div>
            <div role="button" onClick={() => router.push('/')} className="w-fit z-50 pl-5 md:pl-10">
                <video playsInline autoPlay muted preload="none" loop height={'100px'} className=" object-contain h-[50px] md:h-[75px] w-fit">
                    <source type='video/webm' src={'/aassets/RotatingWebsiteLogo1.webm'}></source>
                </video>
            </div>
            <div className={subheadingFont.className + " md:flex items-center gap-5 font-medium hidden pr-10 z-50 transition-all ease-in-out"}>
                <Link href={'/book-us'}><p className=" uppercase">Books Us</p></Link>
                <Link href={'/quote'}><p className=" uppercase">Get Quote</p></Link>
                <Link href={'/portfolio'}><p className=" uppercase">portfolio</p></Link>
                <Link href={'/about-us'}><p className=" uppercase">about us</p></Link>
                <Link href={'/testimonials'}><p className=" uppercase">testimonials</p></Link>
            </div>
            <div role="button" onClick={() => onClick()} className="z-[99999] pr-5 block md:hidden">
                <Menu className="z-[99999] h-7 w-7" />
            </div>
            <AnimatePresence>
                {isHam && <Ham />}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;

const navItems = [
    {
        item: 'Home',
        link: '/'
    },
    {
        item: 'Book Us',
        link: '/book-us'
    },
    {
        item: 'Get Quote',
        link: '/quote'
    },
    {
        item: 'Portfolio',
        link: '/portfolio'
    },
    {
        item: 'About',
        link: '/about-us'
    },
    {
        item: 'Testimonials',
        link: '/testimonials'
    },
]

const contacts = [
    {
        icon: Mails,
        value: 'kavan1357@gmail.com',
        clickable: false,
        link: ''
    },
    {
        icon: Linkedin,
        value: 'Kavan Thakkar',
        clickable: true,
        link: 'https://www.linkedin.com/in/kavan-thakkar/'
    },
    {
        icon: Github,
        value: 'Ka1Thakkar',
        clickable: true,
        link: 'https://github.com/Ka1Thakkar'
    },
]

const Ham = () => {
    const hamItemRef = useRef(null)
    const isInView = useInView(hamItemRef, {
        margin: "0px -100px 100px 0px",
        once: true
    })
    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0, opacity: 100 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: cubicBezier(0.17, 0.55, 0.55, 1) }}
            className={cn(subheadingFont.className, "h-screen w-screen lg:w-[40vw] xl:w-[30vw] bg-[#191416] fixed top-0 right-0 flex flex-col justify-between px-10 lg:px-20 py-20 lg:py-20 z-[999] md:hidden")}>
            <div className=" flex flex-col gap-10 pt-20">
                {navItems.map((Item, id) => {
                    return (
                        <Link href={Item.link}>
                            <motion.div style={{ transform: isInView ? 'none' : 'translateX(200px)', opacity: isInView ? 1 : 0, transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s` }} ref={hamItemRef} key={id}>
                                <p className={subheadingFont.className + " text-3xl text-[#FFE812] z-[99999] font-bold"}>{Item.item}</p>
                            </motion.div>
                        </Link>
                    )
                })}
            </div>
            <div>
                <p className={subheadingFont.className + " text-white text-2xl pb-5"}>Get in touch:</p>
                <div className="flex text-[#FFE812] gap-10">
                    {contacts.map((contact, id) => {
                        return (
                            <div key={id}>
                                <contact.icon />
                            </div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    );
}