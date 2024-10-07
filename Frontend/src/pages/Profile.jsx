import React from 'react'
import TItle from '../components/TItle'

const Profile = () => {
    return (
        <div>

            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                    <TItle text1={'MY'} text2={'PROFILE'} />
                </div>
                <div className='flex gap-3'>
                    <input required name='firstName' className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='First Name' />
                    <input required name='lastName' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
                </div>
                <input required name='email' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
                <input required name='country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
                <div className='flex gap-3'>
                    <input required name='cit' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
                    <input required name='state' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input required name='zipcode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
                    <input required name='phone' className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' />
                </div>
            </div>
        </div>
    )
}

export default Profile

