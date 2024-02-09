import { JotFormEmbed } from "jotform-react";
import localFont from "next/font/local";

const headingFont = localFont({src : '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const Form = () => {
    return (
        <div className="md:px-32 px-10 relative py-40 text-[#FFD504]">
            <div className="pb-20">
                <h1 className={headingFont.className + " text-8xl font-medium"}>Get an Estimated Quote</h1>
            </div>
            <JotFormEmbed formURL={'https://form.jotform.com/233176911017149'} />
        </div>
    );
}
 
export default Form;