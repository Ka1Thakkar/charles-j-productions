import Image from 'next/image';
import crewMembers from '../_components/data/crew-members'
import localFont from "next/font/local";
import { cn } from '@/lib/utils';


const headingFont = localFont({ src: '../../../public/Fonts/Nirvana-Font/NIRVANA.woff2' })

const subheadingFont = localFont({ src: '../../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2' })

const Crew = () => {
    return (
        <div id='crew' className={subheadingFont.className + ' flex flex-col items-center justify-center min-h-screen px-10 md:px-32 py-20 text-[#FFE812] transition-all ease-in-out gap-20'}>
            {crewMembers.map((member: any, id: number) => {
                return (
                    <div key={id} className={cn('flex gap-20 items-center flex-col', id%2 === 0 ? " lg:flex-row" : "lg:flex-row-reverse")}>
                        <div className="relative overflow-hidden rounded-3xl xl:w-5/12 lg:w-5/12 w-full">
                            <Image priority src={member.image} alt="client image" className="h-[50vh] lg:h-[75vh] object-cover object-center w-full" />
                            {/* <div className="absolute w-full h-full bg-[#FFD504]/10 top-0" /> */}
                        </div>
                        <div className="xl:w-6/12 lg:w-6/12">
                            <p className="text-5xl font-bold">
                                {member.name}
                            </p>
                            <p className='pb-10 italic text-xl'>
                                {member.role}
                            </p>
                            <p className="text-lg font-light text-white">
                                {member.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Crew;