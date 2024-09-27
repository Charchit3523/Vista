import React from 'react'

const NewsletterBox = () => {
  return (
    <div className=''>

      <p className='text-2xl font-medium text-gray-600'>Contact Us</p>
      <p className='text-gray-400 mt-3 mb-2'>If you have any message or Querries please email us through this form.</p>
      <form className=' flex items-center gap-3  my-6 ' >

        <input className='border rounded border-gray-300  outline-none py-1.5 px-3.5 w-full mb-3' type="email" placeholder=' Email-address' required />
        <input className='border border-gray-300 outline-none rounded py-1.5 px-3.5 w-full mb-4' type="text" placeholder='Message' required />

        <button className='bg-black text-white px-8 py-3 text-md rounded-md  active:bg-gray-700 mb-3' type='submit'>Submit</button>

      </form>
    </div>

  )
}

export default NewsletterBox

