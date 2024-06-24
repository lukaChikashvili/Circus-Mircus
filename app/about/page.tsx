"use client"

import React from 'react';
import clown from '../../assets/circus acrobats 19e8d032-dbae-47ca-8db8-413f53ec8c2d.png';
import old from '../../assets/circus mircus 1 a4d680a1-7949-4704-9f11-7daf8d2f9e3d.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-800 to-black text-white absolute top-0 about'>
      <div className='max-w-4xl mx-auto p-8 text-center mt-24'>
        <motion.h1 initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className='text-5xl font-bold mb-8 title'>About Circus Mircus</motion.h1>

        <motion.p initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className='text-lg mb-6'>
          Welcome to the extraordinary world of Circus Mircus, where imagination meets reality and every performance is a
          mesmerizing journey. We are not just a circus; we are a celebration of art, creativity, and the human spirit.
        </motion.p>
        <motion.p initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className='text-lg mb-6'>
          Founded by a group of talented artists from diverse backgrounds, Circus Mircus blends traditional circus arts
          with modern performance techniques. Our troupe includes acrobats, jugglers, clowns, magicians, and musicians who
          come together to create a symphony of sights and sounds that captivate audiences of all ages.
        </motion.p>
        <motion.p initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className='text-lg mb-6'>
          At Circus Mircus, we believe in pushing the boundaries of what's possible. Each act is designed to inspire awe
          and wonder, leaving spectators on the edge of their seats. From breathtaking aerial displays to heartwarming
          clown acts, every moment is crafted with precision and passion.
        </motion.p>
        <motion.p initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className='text-lg mb-6'>
          Join us under the big top and experience the magic of Circus Mircus. Whether it's your first visit or you're a
          returning fan, our performances promise an unforgettable adventure filled with laughter, amazement, and joy.
        </motion.p>

        <motion.span initial={{ opacity: 0, translateY: 5 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 2 }}>
          <Image src={clown} alt="clown" className='rounded-md shadow-lg duration-500 ease-in hover:grayscale' />
        </motion.span>

        <div className='max-w-4xl mx-auto p-8 text-center'>
          <motion.h1 initial={{ opacity: 0, translateY: 5 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className='text-5xl font-bold mb-8 title'>Our Story</motion.h1>
          <motion.p initial={{ opacity: 0, translateY: 5 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className='text-lg mb-6'>
            The enchanting journey of Circus Mircus began over a decade ago in a quaint, picturesque town. It was here that
            a group of visionary artists from various corners of the globe came together, united by a shared dream: to
            redefine the art of circus performance.
          </motion.p>
          <motion.p initial={{ opacity: 0, translateY: 5 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className='text-lg mb-6'>
            Our founders hailed from diverse backgrounds - some were seasoned acrobats, others were gifted magicians,
            passionate musicians, and skilled craftsmen. What brought them together was a mutual love for storytelling and
            a desire to create something extraordinary. They envisioned a circus that would transcend traditional boundaries,
            blending age-old techniques with innovative artistry.
          </motion.p>

          <motion.span initial={{ opacity: 0, translateY: 5 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 1.5 }}>
            <Image src={old} alt="old" className='rounded-md shadow-lg duration-500 ease-in hover:grayscale' />
          </motion.span>

          <motion.p initial={{ opacity: 0, translateY: 5 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className='text-lg mt-12'>
            In the early days, the troupe traveled from town to town, performing in makeshift tents and open fields. Their
            unique acts and heartfelt performances quickly garnered attention, capturing the hearts of audiences young and
            old. Word of their mesmerizing shows spread like wildfire, and soon, Circus Mircus became a name synonymous with
            magic and wonder.
          </motion.p>
          <motion.p initial={{ opacity: 0, translateY: 5 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className='text-lg mt-12'>
            As the years went by, Circus Mircus continued to grow, attracting more talented performers and expanding its
            repertoire. Each new member brought their own flair and expertise, enriching the circus's legacy. The troupe's
            dedication to excellence and their commitment to pushing creative boundaries earned them accolades and loyal fans
            worldwide.
          </motion.p>
          <motion.p initial={{ opacity: 0, translateY: 5 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className='text-lg'>
            Today, Circus Mircus stands as a testament to the power of dreams and the beauty of collaboration. Our shows
            combine the best of traditional circus arts with contemporary performance styles, creating an unforgettable
            experience for all who attend. From breathtaking aerial feats to heartwarming clown acts, every performance is a
            celebration of the human spirit.
          </motion.p>
          <motion.p initial={{ opacity: 0, translateY: 5 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className='text-lg'>
            Join us as we continue to write our story, one spectacular show at a time. Thank you for being a part of our
            incredible journey.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
