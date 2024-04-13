'use client'
import localFont from "next/font/local";
import Link from "next/link";


const headingFont = localFont({ src: '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2' })

const subheadingFont = localFont({ src: '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2' })

const History = () => {
    return (
        <div className={subheadingFont.className + ' flex flex-col items-center justify-center min-h-screen px-10 md:px-32 py-20 text-[#FFE812] transition-all ease-in-out scroll-smooth'}>
            <h1 className={headingFont.className + ' xl:pb-20 pb-10 text-8xl font-medium transition-all ease-in-out'}>Our Journey</h1>
            <p className="text-white text-xl md:text-3xl font-light mb-20">
                Founded in Maine in 2019, Charles J. Films Productions, LLC is a dynamic force in the film industry, specializing in a wide range of video productions including wedding videos, commercials, music videos, and more. Our team of dedicated professionals operates with a fervent passion for storytelling and a commitment to excellence. With an emphasis on delivering high-quality cinematic experiences reminiscent of those from larger studios, we pride ourselves on providing unbeatable value to our clients. At Charles J. Films Productions, LLC, we combine creativity, professionalism, and technology to bring our clients' visions to life, ensuring every project exceeds expectations and leaves a lasting impact.
            </p>
            <Link href={"#crew"} scroll replace>
                <div role="button" className="text-white md:text-xl font-semibold border-[#FFE812] border-2 py-2 px-5 rounded-full hover:bg-[#FFE812] hover:text-black transition-all ease-in-out">
                    Meet the Crew
                </div>
            </Link>
        </div>
    );
}

export default History;