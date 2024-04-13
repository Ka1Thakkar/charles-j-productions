import localFont from "next/font/local";
import Link from "next/link";

const headingFont = localFont({ src: '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2' })

const subheadingFont = localFont({ src: '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2' })

const Contract = () => {
    return (
        <div className="md:px-32 px-10 relative py-20 text-[#FFE812]">
            <h1 className={headingFont.className + " text-8xl font-medium mb-5"}>Happy with the Quotation?</h1>
            <p className="text-white text-xl md:text-3xl font-light mb-10">
                Sign the Contract and let's start working on your project!
            </p>
            <Link href={'/contract'}>
                <div role="button" className="text-black lg:text-xl font-bold bg-[#FFE812] py-2 px-5 rounded-full w-fit">
                    Contract
                </div>
            </Link>
        </div>
    );
}

export default Contract;