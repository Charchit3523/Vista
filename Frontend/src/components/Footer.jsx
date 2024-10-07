import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (



    <div  >

      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

        <div>
          <div className='flex items-center gap-2'>
            <img className='w-12' src={assets.logo} alt="" />
            <div>
              <p className='prata-regular text-2xl sm:py-3 lg:text-3xl leading-relaxed'>Vista</p>
            </div>
            <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
          </div>
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis fugiat deleniti eum ad accusamus odit, omnis, quo similique porro ipsum quasi natus quis. Dolorum exercitationem ab corporis officiis pariatur blanditiis.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-500'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy-Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-500'>
            <li>+977 9800000000</li>
            <li>contact@gmail.com</li>
          </ul>

        </div>
      </div>

      <div >
        <hr />
        <p className='bg-gray-300 py-5 text-sm text-center'> &copy; Copyright 2024 @INFAMOUS - All Right Reserved.</p>
      </div>
    </div>


  )
}

export default Footer
