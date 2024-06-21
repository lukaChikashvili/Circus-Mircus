
import React from 'react'
import logo from '../assets/image1_0 (2).jpg'
import Image from 'next/image'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <>
    <div className='relative z-10 flex items-center justify-between py-6 px-20'>
      
         <Image src = {logo} alt = "logo"  className='w-24 rounded-full shadow-black shadow-lg'/>
      
      <div className='flex items-center gap-4'>
     
      <span className='text-white font-bold'>MENU</span>
      <Menu size={40} className='text-white' />
      </div>
    </div>
    </>
  )
}

export default Header
