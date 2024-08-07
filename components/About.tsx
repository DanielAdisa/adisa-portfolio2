import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"


type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <motion.h3 
        initial={{
            opacity:0,
          }}
          transition={{
            duration:1.0,
          }}
          whileInView={{opacity: 1}}
        className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</motion.h3>
        <motion.div
         initial={{
            x:-200,
            opacity:0,
          }}
          transition={{
            duration:1.2,
          }}
          whileInView={{opacity: 1,x: 0}}
          className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-[4/5] rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        >
        <Image  className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] mt-5'
            src='/IMG_20190908_102805.jpg'
            height={3264}
            width={2448}
            alt='Mine'/>
        </motion.div>
        <div className=' space-y-10 px-0 md:px-10 pt-14'>
            <h4 className='text-4xl font-semibold mx-0'>A bit about Me</h4>
            <p className='text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem! Necessitatibus ratione consequuntur aliquid dicta voluptatum modi, natus reiciendis excepturi quis cum, quia blanditiis libero assumenda! Consectetur doloremque ex modi.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus laudantium commodi saepe tempora facilis aperiam voluptatem ea. Fuga eveniet nisi sit distinctio iusto quidem recusandae ea iste quas, ex voluptatem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem autem amet molestiae quidem. Voluptas accusamus magni facere harum sed fuga, quaerat temporibus dignissimos explicabo culpa in eos, exercitationem suscipit nobis?
            </p>
        </div>
    </div>
  )
}