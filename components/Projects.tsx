import Image from 'next/image';
import React from 'react'

type Props = {}

export default function Projects({}: Props) {
    // const projects = [1,2,3,4,5,6];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3  className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className=' relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
{/*           {projects.map((project, i) => ( */}
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <Image
                src={"/IMG_20190908_102805.jpg"} 
                width={200} 
                height={100} 
                alt='one'
                />
              <div>
{/*                 <h4>Case Study {i+1} of {projects.length} : Netflix Clone </h4> */}
              </div>
            </div>
{/*           ))} */}
        </div>
        <div className=' w-full absolute top-[30%] bg-[#25D366]/10 left-0 h-[500px] -skew-y-12'/>
        <div className=' w-full absolute top-[30%] bg-[#25D366]/10 left-0 h-[500px] skew-y-12'/>
    </div>
  )
}
