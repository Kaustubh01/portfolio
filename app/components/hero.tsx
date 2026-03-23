import React from 'react'
import Image from 'next/image'
import hero from '@/public/images/hero/hero.webp'
import { BsGithub } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

const Hero = () => {
  return (
<section className='w-full h-[92vh] flex'>
  <header className='flex flex-col md:flex-row w-full max-w-5xl mx-auto h-full'>

        {/* LEFT */}
        <div className='flex flex-col items-center justify-center w-1/2 h-full'>
          <div className='bg-green-200'>
            <Image
              src={hero}
              alt='hero'
            />
           
          </div>

          <div
            className='flex my-12 gap-2'
          >
            <BsGithub size={20} />
            <SiLeetcode size={20} />
          </div>
        </div>


        {/* RIGHT */}
        <div className='flex flex-col mx-4 w-1/2 h-auto md:h-full justify-center items-start'>
          <h1>I'm <b>Kaustubh</b></h1>
          <p>A software developer & programmer</p>
        </div>



      </header>

    </section>
  )
}

export default Hero