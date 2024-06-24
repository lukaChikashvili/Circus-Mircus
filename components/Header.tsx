"use client"
import React, { useState } from 'react';
import logo from '../assets/image1_0 (2).jpg';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='relative z-10 flex items-center justify-between py-6 px-8 md:px-20'>
        <Image src={logo} alt="logo" className='w-24 rounded-full shadow-black shadow-lg' />
        <div className='flex items-center gap-4'>
          <span className='text-white font-bold hidden md:block'>MENU</span>
          <Menu size={40} className='text-white cursor-pointer duration-500 ease-in hover:text-yellow-400' onClick={toggleMenu} />
        </div>
      </div>
      <AnimatePresence>
      {menuOpen && (
        
        <motion.div initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    exit={{opacity: 0}}
                     transition={{duration: 1, delay: 0.5}}
        className='fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center text-white menu'>
          <button className='absolute top-12 right-20 text-white text-5xl' onClick={toggleMenu}>&times;</button>
          <nav className='flex flex-col gap-12 text-6xl md:text-8xl '>
            <a href="/" onClick={toggleMenu}>Home</a>
            <a href="/about" onClick={toggleMenu}>About</a>
            <a href="/members" onClick={toggleMenu}>Members</a>
            <a href="#section4" onClick={toggleMenu}>Contact</a>
          </nav>
          
      
            
          
        </motion.div>
       
      )}


       </AnimatePresence>
    </>
  );
};

export default Header;
