import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  // for the login and sign up if the user
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {

      // register
      if (currentState === 'Sign up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password, address, phone })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)
        }
      }
      // login
      else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          // localStorage.setItem('name', response.data.name)
          // localStorage.setItem('email', response.data.rmail)
          // localStorage.setItem('address', response.data.address)
          // localStorage.setItem('phone', response.data.phone)
        }
        else{
          toast.error(response.data.message)
        }
        
      }

    } catch (error) {
      console.error("Error during submission:", error);
      toast(error.message)
    }
  }

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <div className='flex flex-col sm:flex-row border border-gray-200 mt-4'>
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[80%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        {/* <img className='w-32' src={assets.logo} alt="" /> */}
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        {
          currentState === 'Login' ? ''
            : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-300 rounded' placeholder='Name' required />
        }

        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-300 rounded' placeholder='Email Adress' required />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-300 rounded' placeholder='Password' required />

        {
          currentState === 'Login' ? ''
            : <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className='w-full px-3 py-2 border border-gray-300 rounded' placeholder='Address' required />
        }

        {
          currentState === 'Login' ? ''
            : <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full px-3 py-2 border border-gray-300 rounded' placeholder='Phone Number' required />
        }
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          {
            currentState === 'Login' ? <p className='cursor-pointer'>forgot password?</p>
              : ''
          }

          {
            currentState === 'Login' ? <p onClick={() => setCurrentState('Sign up')} className='cursor-pointer'>Create account</p>
              : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Already have an account?</p>
          }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4 rounded-md  active:bg-gray-700 mb-4'>
          {
            currentState === 'Login' ? 'Sign In'
              : 'Sign Up'
          }
        </button>




      </form>
      
          <img className='h-full mt-14 mb-10 mr-10' src={assets.logo} alt="" />
      
    </div>
  )
}

export default Login
