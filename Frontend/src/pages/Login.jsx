import React, { useState } from 'react'
import { assets } from '../assets/assets';

const Login = () => {

  const [currentState,setCurrentState]=useState('Login');

  const onSubmitHandeler = async (event) =>{
      event.preventDefault();
      
  }

  return (
  <div className='flex flex-col sm:flex-row border border-gray-400 mt-4'>
    <form onSubmit={ onSubmitHandeler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <img  src={assets.logo} alt="" />
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        {
            currentState=== 'Login' ? '' 
                                    : <input type="text" className='w-full px-3 py-2 border border-gray-800 rounded' placeholder='Name' required /> 
        }

        <input type="email" className='w-full px-3 py-2 border border-gray-800 rounded' placeholder='Email Adress'required/>
        <input type="password" className='w-full px-3 py-2 border border-gray-800 rounded' placeholder='Password' required/>
        
        {
            currentState=== 'Login' ? '' 
                                    :<input type="text" className='w-full px-3 py-2 border border-gray-800 rounded' placeholder='Address' required/>
        }

        {
            currentState=== 'Login' ? '' 
                                    :<input type="number" className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full px-3 py-2 border border-gray-800 rounded' placeholder='Phone Number' required/>
        }
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
            {
                currentState=== 'Login' ? <p className='cursor-pointer'>forgot password?</p>
                                        :''
            }

            {
               currentState==='Login'? <p onClick={()=>setCurrentState('Sign up')}  className='cursor-pointer'>Create account</p>
                                     : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Already have an account?</p>
            }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4 rounded-md  active:bg-gray-700 mb-4'> 
          {
            currentState==='Login'? 'Sign In'
                                  : 'Sign Up'
          }
        </button>


      

    </form>
    <img className='w-full sm:w-1/2' src={assets.about_img} alt="" />
   </div>
  )
}

export default Login
