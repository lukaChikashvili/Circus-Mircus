"use client";

import React, { useEffect, useState } from 'react'
import img1 from '../assets/image0_0.jpg'
import img2 from '../assets/image0_0 (2).jpg'
import img3 from '../assets/image1_0 (1).jpg'
import img4 from '../assets/image1_0 (3).jpg'
import Image from 'next/image';
import { useTransition, animated } from 'react-spring';
import Main from './Main';


const images = [
   img1, img2, img3, img4
]



const Slider = () => {


    const [index, setIndex] = useState(0);

        // react spring transitions
const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
});

   

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 7000);

      return () => clearInterval(interval);
    }, []);

  

  return (
    <div className='w-full  '>
     
     {transitions((style, i) => (
        <animated.div
          key={i}
          style={{
            ...style,
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 1.6)', 
          }}
        >
          <Image
            alt="img"
            src={images[i]}
            layout="fill"
            objectFit="cover"
            style={{ opacity: 0.9 }} 
          />
        </animated.div>
      ))}


    <Main />
 
    </div>
   
  )
}

export default Slider
