import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function Projects({}: Props) {
    // const projects = [1,2,3,4,5,6];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3  className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className=' relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#25D366]/80'>
          {/* {projects.map((project, i) => ( */}
            <motion.div 
            initial={{opacity:0}}
            transition={{duration:1.5}}
            whileInView={{opacity: 1}}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <motion.div
                initial={{opacity:0,y:-300}}
                transition={{duration:1.2}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once:false}}
                >
                <Image
                src={"/IMG_20190908_102805.jpg"} 
                width={200} 
                height={100} 
                alt='one'
                />
                </motion.div>
              <div>
                <h4 className=' text-4xl font-semibold text-center'>
                  {/* <span className=' underline decoration-[#25D366]/50'>Case Study {i+1} of {projects.length} :</span>{" "}Netflix Clone  */}
                </h4>
                <p className=' text-lg text-center md:text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas soluta dolore distinctio consectetur. Accusantium nisi, recusandae vel nam beatae itaque, rerum alias ratione fugit eaque voluptate asperiores minima maiores.</p>
              </div>
            </motion.div>
          {/* ))} */}
        </div>
        <div className=' w-full absolute top-[30%] bg-[#25D366]/10 left-0 h-[500px] -skew-y-12'/>
        {/* <div className=' w-full absolute top-[30%] bg-[#25D366]/10 left-0 h-[500px] skew-y-12'/> */}
    </div>
  );
}