import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

type Props = {
  directionLeft?: boolean;
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div
              initial={{
                x: directionLeft? -200 : 200,
                opacity:0
              }}
              transition={{duration:1}}
              whileInView={{opacity: 1, x:0}}
              viewport={{once:true,}}
        >
              <Image
                src={"/IMG_20190908_102805.jpg"} 
                width={2448} 
                height={3264} 
                alt='one' 
                className='rounded-full border-4 border-gray-500 object-cover h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
        </motion.div>
        
        <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
          <div className=' flex items-center justify-center h-full'>
            <p className='text-1xl md:text-2xl lg:text-3xl font-bold text-black opacity-100'>100%</p>
          </div>
        </div>
    </div>
  )
}