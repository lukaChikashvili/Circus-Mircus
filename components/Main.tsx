import React from 'react'


const Main = () => {
  return (
    <div className='absolute z-10 w-full flex flex-col items-center justify-center h-3/5 main'>
        <div className='flex flex-col gap-4 w-11/12 sm:w-2/3 md:w-1/2 text-center'>
       <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 text-yellow-400 font-bold drop-shadow-2xl" style={{ lineHeight: 'normal' }}>Welcome to <span className='title'>Circus Mircus</span></h1>
         <p className="text-lg sm:text-xl md:text-2xl  mb-6 text-white  ">
           
          Experience the magic, wonder, and excitement of the world's most spectacular circus.
        </p>

       
        </div>
       
    </div>
  )
}

export default Main
