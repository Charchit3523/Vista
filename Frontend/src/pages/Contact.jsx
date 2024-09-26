import React from 'react'
import TItle from '../components/TItle'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <>
    
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
          <TItle text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
              <p className='font-semibold text-xl text-gray-600'>Our Store</p>
              <p className='text-gray-500'>Lalitpur,Nepal</p>
              <p className='text-gray-500'>Tel:+977-9800000000 <br/>Email:contact@gmail.com</p>
              <p className='font-semibold text-xl text-gray-600'>Careers at Vista</p>
              <p className='text-gray-500'>Learn more about teams.</p>
              
              <button className='bg-black text-white px-8 py-4 text-sm rounded-md  active:bg-gray-700'>Explore Jobs</button>
          
          </div>
      </div>
    </div>
    <NewsletterBox/>
    </>
  )
}

export default Contact
