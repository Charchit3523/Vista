import React from 'react'
import TItle from '../components/TItle'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
            <TItle text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Vista is a contemporary clothing brand that embodies a unique blend of style, quality, and sustainability. With a vision to redefine modern fashion, Vista focuses on creating versatile pieces that cater to the diverse needs of today's consumers.</p>
                <p>At the heart of Vista lies a commitment to sustainability. The brand prioritizes eco-friendly materials and ethical production practices, ensuring that each piece not only looks good but also contributes positively to the environment. </p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Vista caters to fashion-forward individuals who appreciate quality craftsmanship and timeless designs. The brand resonates particularly with millennials and Gen Z consumers who value sustainability and inclusivity in their fashion choices. By understanding the preferences and lifestyles of its audience, Vista curates collections that reflect their aspirations while promoting a sense of community.</p>
          </div>
      </div>
      <div className='text-xl py-4'>
          <TItle text1={'WHY'} text2={'US?'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ' >
              <b className='text-gray-600'>Quality Assurance:</b>
              <p className='text-gray-600'>Vista prioritizes quality in every aspect of its clothing line, ensuring that each piece meets high standards of craftsmanship and durability.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
              <b className='text-gray-600' >Convenience:</b>
              <p className='text-gray-600'>Vista emphasizes convenience as a core aspect of its shopping experience, making it easier for customers to find and purchase their desired clothing.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
              <b className='text-gray-600'>Exceptional Customer Service</b>
              <p className='text-gray-600'>Vista emphasizes convenience as a core aspect of its shopping experience, making it easier for customers to find and purchase their desired clothing.</p>
          </div>
          
      </div>
    </div>
  )
}

export default About
