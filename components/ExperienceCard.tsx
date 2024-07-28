import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[350px] h-[680px] md:w-[600px] md:h-[820px] xl:w-[800px] snap-center mt-20 bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
        initial={{y:-100, opacity:0,}}
        transition={{duration:1.2}}
        whileInView={{opacity: 1, y:0,}}
        viewport={{once:true,}}
        >
        <Image src='/IMG_20190908_102805.jpg'
            height={3264}
            width={2448}
            alt='Mine'
            className=' w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            />
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO Misfits</h4>
            <p className='font-bold text-2xl mt-1'>Misfits</p>
            <div className=' flex space-x-2 my-2'>
                {/* Stacks */}
            <Image src='/IMG_20190908_102805.jpg'
                height={3264}
                width={2448}
                alt='Mine'
                className=' w-10 h-10 rounded-full'
            />
            <Image src='/IMG_20190908_102805.jpg'
                height={3264}
                width={2448}
                alt='Mine'
                className=' w-10 h-10 rounded-full'
            />
            </div>
            <p className=' uppercase py-5 text-gray-300'>Started Ended Work</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points Summary PointsSummary PointsSummary Points</li>
                <li>Summary Points Summary PointsSummary PointsSummary Points</li>
                <li>Summary Points Summary PointsSummary PointsSummary Points</li>
                <li>Summary Points Summary PointsSummary PointsSummary Points</li>
                <li>Summary Points Summary PointsSummary PointsSummary Points</li>
            </ul>
        </div>
    </article>
  )
}