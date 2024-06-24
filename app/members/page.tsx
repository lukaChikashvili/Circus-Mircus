"use client"

import React from 'react';
import clown1 from '../../assets/clown 80cb108b-dd13-4b3a-8665-32226ec1827b.png';
import clown2 from '../../assets/clown eb90331f-28c9-4c70-ba73-70e03eb22d71.png';
import clown3 from '../../assets/clown girl 30042544-949c-4e2b-990c-54c843f8c4f2.png';
import clown4 from '../../assets/clown girl 31b10f79-7cec-45bd-b44b-cf4dcc09a8c7.png';
import Image from 'next/image';
import { motion } from 'framer-motion'

const Members = () => {
  const clowns = [
    {
      img: clown1,
      title: 'Snickers Sparkles',
    },
    {
      img: clown2,
      title: 'Dizzy Daisy',
    },
    {
      img: clown3,
      title: 'Trixie Tumble',
    },
    {
      img: clown4,
      title: 'Buttons Bumpkin',
    },
  ];


  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-800 to-black absolute top-0 text-white py-16'>
      <section className='w-full mb-24 mt-24'>
        <motion.h1 initial = {{opacity: 0, translateY: 5}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.5, delay: 1}} className='text-6xl mb-12 title text-center'>Clowns</motion.h1>
        <div className='flex flex-wrap justify-center gap-16'>
          {clowns.map((value, i) => (
            <motion.div initial = {{opacity: 0, translateY: 5}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.5, delay: i * 0.25}}
             key={i} className='flex flex-col items-center'>
              <Image src={value.img} alt={value.title} className='w-72 rounded-md mb-4 shadow-lg duration-500 ease-in hover:grayscale ' />
              <h2 className='text-2xl'>{value.title}</h2>
            </motion.div>
          ))}
        </div>
      </section>

      <section className='w-full'>
        <motion.h1 initial = {{opacity: 0, translateY: 5}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.5, delay: 1}}
         className='text-6xl mb-12 title text-center'>Acrobats</motion.h1>
        <div className='flex flex-wrap justify-center gap-16'>
          {clowns.map((value, i) => (
            <motion.div initial = {{opacity: 0, translateY: 5}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 1.5, delay: i * 0.25}} 
             key={i} className='flex flex-col items-center'>
              <Image src={value.img} alt={value.title} className='w-72 rounded-md mb-4 shadow-lg duration-500 ease-in hover:grayscale ' />
              <h2 className='text-2xl'>{value.title}</h2>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Members;
