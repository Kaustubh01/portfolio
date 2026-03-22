import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center'>
      
      <header className='flex flex-row items-center justify-center h-[50vh] w-full max-w-5xl'>
        
        {/* LEFT */}
        <div className='flex flex-col w-1/2 h-full justify-center items-start '>
          <h1>Hi.. I'm Kaustubh</h1>
          <p>A software developer & programmer</p>
        </div>

        {/* RIGHT */}
        <div className='flex items-center justify-center w-1/2 h-full'>
          <div className='h-full w-full max-w-75' />
        </div>

      </header>

    </section>
  )
}

export default Hero