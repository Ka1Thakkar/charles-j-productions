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
        <motion.nav className={subheadingFont.className + " fixed top-0 z-20 w-full text-[#FFD504] flex justify-between py-2"}>
            <motion.div style={{opacity: opacity}} className="absolute w-full h-full bg-[#191416] top-0"></motion.div>
            <div role="button" onClick={() => router.push('/')} className="w-fit z-50 pl-10">
                <Image src={logo} alt="logo" className=" object-contain h-[75px] w-fit" />
            </div>
            <div className="md:flex items-center gap-5 font-bold hidden pr-10 z-50">
                <Link href={'/portfolio'}><p className=" uppercase">portfolio</p></Link>
                <p className=" uppercase">testimonials/ clients</p>
                <Link href={'/quote'}><p className=" uppercase">Get in Touch</p></Link>
                <p className=" uppercase">Book us</p>
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