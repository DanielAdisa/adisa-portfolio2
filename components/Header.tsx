import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className=' sticky top-0  p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center shadow-md rounded-b-lg'>
      {/* border-b-[#25D366] rounded-b border-b-2 border-s-fuchsia-100 */}
        <motion.div 
        initial={{
          x: -500,
          opacity:0,
          scale:0.5,
        }}

        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}

        transition={{
          duration:1.5,
        }}

        className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon url="https://www.linkedin.com/in/daniel-adisa7b076a199" fgColor='#0077B5' bgColor='transparent' className=' hover:scale-110 transition-all ease-in-out'/>
            <SocialIcon url="https://drive.google.com/drive/folders/1n4BKYl-ILS_EE5JCKPVKreKX6641-8l-" fgColor=' 	#EA4335' bgColor='transparent' className=' hover:scale-110 transition-all ease-in-out'/>
            <SocialIcon url="https://www.instagram.com/daniel.made.it?igsh=MXY2Nmt3bWRvaHJxdQ==" fgColor='#962fbf' bgColor='transparent' className=' hover:scale-110 transition-all ease-in-out'/>
            <SocialIcon url="http://www.behance.net/gallery/150840233/Sus-Flowers" fgColor='#5DA5FF' bgColor='transparent' className=' hover:scale-110 transition-all ease-in-out'/>
            <SocialIcon network='whatsapp' url="https://wa.me/message/V4TC5GSQTN7RM1" fgColor='#25D366' bgColor='transparent' className=' hover:scale-110 transition-all ease-in-out' />
        </motion.div>

        {/* <motion.div>
          <Link href="/about">
          <Image
           src="/Assassas.svg"
           width={100}
           height={100}
           alt="Picture of the author"
          />
          </Link>
        </motion.div> */}
      
        <motion.div 
        initial={{
          x: 500,
          opacity:0,
          scale:0.5,
        }}

        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}

        transition={{
          duration:1.5,
        }}
        
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon network='email' fgColor='gray' bgColor='transparent' className=' cursor-pointer' url={'mailto:adisadaniel4@gmail.com'}/>
           <Link href={'mailto:adisadaniel4@gmail.com'}>
              <p className='  hidden md:inline-flex text-sm text-gray-400'>Let Us Work Togehter</p>
           </Link>
        </motion.div>
        
    </header>
  )
}
