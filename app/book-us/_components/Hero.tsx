import Image from "next/image";
import heroImage from '@/public/hero image.png'
import localFont from "next/font/local";

const headingFont = localFont({src : '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const Hero = () => {
    return (
        <div className={subheadingFont.className + " min-h-screen flex flex-col gap-10 items-center"}>
            <div className="relative w-full">
                <Image priority src={heroImage} alt="hero image" className="w-full h-[75vh] object-cover object-top" />
                <div className="absolute bg-gradient-to-b from-[#191416] to-[#191416] h-full via-transparent w-full z-10 top-0"></div>
            </div>
            <p className="text-white font-bold md:text-3xl md:px-32 px-10 text-center text-lg">
            Welcome to Charles J. Film Productions scheduling page. Check out my Calendar and let me know what time works the best for you!
            </p>
        </div>
    );
}
 
export default Hero;