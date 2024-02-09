'use client'
import Image from "next/image";
import logo from '@/public/aassets/Yellow PNG (2).png'

import { Almarai } from "next/font/google";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/navigation";

const headingFont = localFont({src : '../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const Navbar = () => {
    const router = useRouter()
    return (
        <nav className={subheadingFont.className + " fixed top-0 z-[9999] bg-[#191416] w-full flex justify-between px-10 py-2 text-[#FFD504]"}>
            <div role="button" onClick={() => router.push('/')} className="w-fit">
                <Image src={logo} alt="logo" className=" object-contain h-[75px] w-fit" />
            </div>
            <div className="md:flex items-center gap-5 font-bold hidden">
                <Link href={'/portfolio'}><p className=" uppercase">portfolio</p></Link>
                <p className=" uppercase">testimonials/ clients</p>
                <p className=" uppercase">Get in Touch</p>
                <p className=" uppercase">Book us</p>
            </div>
        </nav>
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