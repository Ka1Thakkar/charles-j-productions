'use client'
import Image from "next/image";
import logo from '@/public/aassets/Yellow PNG (2).png'

import { Almarai } from "next/font/google";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MotionValue, useTransform, motion, useMotionValue } from "framer-motion";

const headingFont = localFont({src : '../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

interface NavbarProps {
    progress ?: MotionValue
}

const Navbar = ({progress} : NavbarProps) => {
    const router = useRouter()
    let opacity = useMotionValue(1)
    if (progress !== undefined) {
        opacity = useTransform(progress, [0,0.1], [0,1])
    }
    return (
        <motion.nav style={{display : '-webkit-flex', WebkitJustifyContent : 'space-between'}} className={subheadingFont.className + " fixed top-0 z-[999] w-[100vw] text-[#FFE812] flex justify-between py-2 overflow-hidden"}>
            <motion.div style={{opacity: opacity}} className="absolute w-full h-full bg-[#191416] top-0"></motion.div>
            <div role="button" onClick={() => router.push('/')} className="w-fit z-50 pl-5 md:pl-10">
                <video playsInline autoPlay muted preload="none" loop height={'100px'}  className=" object-contain h-[50px] md:h-[75px] w-fit">
                    <source type='video/webm' src={'/aassets/RotatingWebsiteLogo1.webm'}></source>
                </video>
            </div>
            <div className={headingFont.className + " md:flex items-center gap-5 font-thin hidden pr-10 z-50 transition-all text-3xl ease-in-out"}>
                <Link href={'/book-us'}><p className=" uppercase">Books Us</p></Link>
                <Link href={'/quote'}><p className=" uppercase">Get Quote</p></Link>
                <Link href={'/portfolio'}><p className=" uppercase">portfolio</p></Link>
                <Link href={'/about-us'}><p className=" uppercase">about us</p></Link>
                <Link href={'/testimonials'}><p className=" uppercase">testimonials</p></Link>
            </div>
        </motion.nav>
    );
}

export default Navbar;

interface NavDropdownProps {
    trigger : string
}

const NavDropdown = ({trigger} : NavDropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={subheadingFont.className + "   font-bold uppercase border-none"}>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#191416] border-0 text-[#FFD504] text-xl">
                <DropdownMenuItem className="focus:bg-[#FFD504] focus:text-[#191416] transition-all ease-in-out">Wedding</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[#FFD504]" />
                <DropdownMenuItem className="focus:bg-[#FFD504] focus:text-[#191416] transition-all ease-in-out">Commercials</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[#FFD504]" />
                <DropdownMenuItem className="focus:bg-[#FFD504] focus:text-[#191416] transition-all ease-in-out">Music Videos</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[#FFD504]" />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}