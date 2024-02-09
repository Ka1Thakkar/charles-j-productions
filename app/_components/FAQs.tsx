import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import image from '@/public/FAQsImage.png'
import localFont from 'next/font/local';
import Image from 'next/image';

const headingFont = localFont({src : '../../public/Fonts/Nirvana-Font/NIRVANA.woff2'})

const subheadingFont = localFont({src : '../../public/Fonts/Satoshi-Font/Satoshi-Variable.woff2'})

const FAQs = () => {
    return (
        <div className={subheadingFont.className + ' flex flex-col items-center justify-center min-h-screen px-10 md:px-32 py-20 text-[#FFD504]'}>
            <h1 className={headingFont.className + ' xl:pb-20 pb-10 text-8xl font-medium'}>FAQs</h1>
            <div className={subheadingFont.className + ' flex xl:flex-row flex-col items-start gap-20'}>
                <Image src={image} alt='FAQs image' className='xl:w-4/12' />
                <div>
                    <h1 className='text-4xl font-bold pb-10'>Lorem ipsum dolor sit amet, consectetur ?</h1>
                    <p className='text-white text-2xl font-light pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. </p>
                    <div className="h-[2px] w-[100%] bg-[#FFD504]/30"></div>
                    <div className='pt-10 text-[#FFD504]/70'>
                        <AccordianElement />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FAQs;

const AccordianElement = () => {
    return (
        <Accordion type="single" collapsible className='flex flex-col gap-5'>
            <AccordionItem value="item-1" className='border-[#FFD504]/50'>
                <AccordionTrigger className='text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur ?</AccordionTrigger>
                <AccordionContent className='text-white text-xl font-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. 
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className='border-[#FFD504]/50'>
                <AccordionTrigger className='text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur ?</AccordionTrigger>
                <AccordionContent className='text-white text-xl font-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. 
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className='border-[#FFD504]/50'>
                <AccordionTrigger className='text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur ?</AccordionTrigger>
                <AccordionContent className='text-white text-xl font-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. 
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className='border-[#FFD504]/50'>
                <AccordionTrigger className='text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur ?</AccordionTrigger>
                <AccordionContent className='text-white text-xl font-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus vitae tortor ut mollis. Cras semper, sem in consequat facilisis, risus quam tincidunt ante, sit amet accumsan velit urna quis ex. Sed feugiat orci dui, eget rhoncus massa accumsan eu. 
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}