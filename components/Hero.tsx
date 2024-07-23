import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';

type Props = {}



export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Welcome to my Portfoilio.","Hi Daniel Adisa here.","Dream It, We build It."],
        loop: true,
        delaySpeed:2000,
    });

    const [title, count1] = useTypewriter({
        words: ["Software Engineer","Graphics Designer","3D Artist","Data Analyst"],
        loop: true,
        delaySpeed:2000,
    });
  return (
    <div className=' h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden scroll-smooth'>
        <BackgroundCircles/>
            <Image
            className=' relative rounded-full h-32 w-32 mx-auto object-cover'
            src='/IMG_20190908_102805.jpg'
            height={3264}
            width={2448}
            alt='Mine'
            />
        <div className=' z-20'>
            <h2 className=' text-sm uppercase text-gray-400 font-semibold pb-2 tracking-[15px]'>{title}
            <Cursor cursorColor='#25D366'/>
            </h2>
            <h1 className=' text-5xl lg:text-6xl font-semibold px-10'> <span className='mr-3'> {text} <Cursor cursorColor='#25D366'/> </span> 
           
            </h1>
            <div className=' pt-5'>
                <Link href="#about">

                <button className='heroButton'>About</button>

                </Link>

                 <Link href="#experience">

                <button className='heroButton'>Experience</button>

                </Link>

                 <Link href="#about">

                <button className='heroButton'>Skills</button>

                </Link>
                
                <Link href="#about">

                <button className='heroButton'>Projects</button>
                
                </Link>
                
    

            </div>
        </div>    
    </div>
  );
}