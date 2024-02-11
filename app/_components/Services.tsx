import Image from "next/image";
import services from '@/public/aassets/Services Text.png'
import { Almarai, Anybody } from "next/font/google";
import localFont from "next/font/local";

const headingFont = localFont({src : '../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const Services = () => {
    return (
        <div className={subheadingFont.className + " min-h-screen items-center gap-40 py-20 text-[#FFE812]"}>
            {/* <Image src={services} alt="services text" className="h-[15vh] object-contain w-fit" /> */}
            <div className="md:px-32 px-10">
                <h1 className="text-4xl font-bold pb-5">Our Services</h1>
                <div className="h-[2px] w-full bg-[#FFE812]/30"></div>
                <div className="flex flex-col gap-20 xl:gap-10 py-20">
                    {serivces.map((service, id) => {
                        return (
                            <ServiceElement key={id} position={id} object={service} />
                        )
                    })}
                </div>
                <div className="h-[2px] w-full bg-[#FFE812]/30"></div>
            </div>
        </div>
    );
}
 
export default Services;

const serivces = [
    {
        service : 'Video Production',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. '
    },
    {
        service : 'Film Production',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. '
    },
    {
        service : 'Photography',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. '
    },
    {
        service : 'Post-Production',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. '
    },
    {
        service : 'Live Streaming',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. '
    },
    {
        service : 'Animation',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. '
    },
]

interface ServiceElementProps {
    position : number,
    object : {service : string, description : string}
}
const ServiceElement = ({position, object} : ServiceElementProps) => {
    position += 1
    return (
        <div className="flex transition-all ease-in-out flex-col xl:flex-row justify-between gap-5 xl:gap-0">
            <p className="xl:w-2/12 xl:text-xl text-4xl font-extrabold xl:font-normal transition-all ease-in-out">{'0' + position.toString()}</p>
            <h1 className="xl:w-4/12 text-3xl font-bold uppercase transition-all ease-in-out">{object.service}</h1>
            <p className="text-white xl:w-6/12 text-xl font-light transition-all ease-in-out">{object.description}</p>
        </div>
    );
}