'use client'
import localFont from "next/font/local";
import Link from "next/link";
import { InlineWidget } from 'react-calendly'

const headingFont = localFont({ src: '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2' })

const subheadingFont = localFont({ src: '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2' })

const DiscoveryMeeting = () => {
    return (
        <div className={subheadingFont.className + " min-h-screen flex xl:flex-row flex-col items-center md:px-32 justify-between text-[#FFE812] gap-10 py-40"}>
            <div className="xl:w-5/12 flex flex-col gap-10 px-10 md:px-0">
                <h1 className={headingFont.className + " text-8xl font-medium"}>30 Minute Discovery Meeting</h1>
                <p className="text-white text-3xl font-light">
                    Please arrive for the meeting 5 minutes prior, with your questions ready. If you haven't yet, we highly recommend that you price out an Estimated Quote on our website before proceeding, in order to have the most productive conversation. I look forward to speaking with you, and figuring out what makes the most sense for you and your vision! If you would like to reschedule, please do so at least 48hrs prior to the meeting time, to ensure that unnecessary time is not blocked, thanks!
                </p>
                <div className="flex gap-5 items-center">
                    <Link href={'/quote'}>
                    <div role="button" className="text-black lg:text-xl font-bold bg-[#FFE812] py-2 px-5 rounded-full">
                        Get Quote
                    </div>
                    </Link>
                    <Link href={'/contract'}>
                    <div role="button" className="lg:text-xl font-bold py-2 px-5">
                        Contract
                    </div>
                    </Link>
                </div>
            </div>
            <Calendly />
        </div>
    );
}

export default DiscoveryMeeting;

const Calendly = () => {
    return (
        <div className="xl:w-6/12 overflow-hidden rounded-2xl w-11/12">
            <InlineWidget url="https://calendly.com/charlesjfilms/30min" />
        </div>
    );
}