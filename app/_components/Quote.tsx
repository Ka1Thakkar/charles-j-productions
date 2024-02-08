import Image from "next/image";
import vision from '@/public/aassets/where passion meet 2.png'
import localFont from "next/font/local";

const headingFont = localFont({src : '../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const Quote = () => {
    return (
        <div className="flex xl:flex-row flex-col min-h-[50vh] items-center md:px-32 px-10 gap-20 py-20 text-[#FFD504]">
            <div className="xl:w-7/12">
                    <h1 className={headingFont.className + " 2xl:text-8xl text-7xl text-center xl:text-left text-[#FFD504] font-medium"}>
                        Where Passion & Media Meet
                    </h1>
                </div>
            <div className={subheadingFont.className + " xl:w-5/12 flex flex-col gap-5 w-full"}>
                <p className="font-bold text-xl">Get a Quote</p>
                <div className="h-[2px] w-[100%] bg-[#FFD504]"></div>
                <p className="font-bold text-xl">Book a Meeting</p>
                <div className="h-[2px] w-[100%] bg-[#FFD504]"></div>
                <p className="font-bold text-xl">Subscribe</p>
                <div className="flex justify-between gap-5">
                    <input type='email' className="bg-transparent w-6/12 focus:outline-none text-white" placeholder="Enter your Email"></input>
                    <div role="button" className="font-bold text-white">
                        Sign Up
                    </div>
                </div>
                <div className="h-[2px] w-[100%] bg-[#FFD504]"></div>
            </div>
        </div>
    );
}
 
export default Quote;