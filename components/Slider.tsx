"use client";

import React, { useEffect, useState } from 'react'
import img1 from '../assets/image0_0.jpg'
import img2 from '../assets/image0_0 (2).jpg'
import img3 from '../assets/image1_0 (1).jpg'
import img4 from '../assets/image1_0 (3).jpg'
import Image from 'next/image';

const images = [
   img1, img2, img3, img4
]


const Slider = () => {
   
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }, [])

  return (
    <div className='w-full duration-500 '>
     
        <Image alt = "img" src = {images[index]} fill className='w-full h-screen object-cover ' />
       
    </div>
  )
}

export default Slider
