import React from 'react'
import { assets } from '../assets/assets'

const NavBar = ({ setToken }) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between '>
      <div className='flex items-center gap-2'>
        <img className='w-20' src={assets.logo} alt="" />
        <div>
          <p className='prata-regular text-2xl sm:py-3 lg:text-3xl leading-relaxed'>Vista</p>
        </div>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
      </div>
      <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-md text-xs xm:text-sm active:bg-gray-500'>Logout</button>
    </div>
  )
}

export default NavBar
