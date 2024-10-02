import React, { useContext, useState } from 'react'
import TItle from '../components/TItle'
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from "react-toastify";
const PlaceOrder = () => {

   const {
      products, currency, delivery_fee,
      cartItems, addToCart, getCardCount,
      updateQuantity, getCartAmount, navigate,
      backendUrl, setToken, token, setCartItems  } = useContext(ShopContext);

   const [method, setMethod] = useState('');
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      state: '',
      city: '',
      zipcode: '',
      country: '',
      phone: ''
   })

   const onChangeHandeler = (event) => {
      const name = event.target.name;
      const value = event.target.value

      setFormData(data => ({ ...data, [name]: value }))

   }

   const onSubmutHandeler = async (e) => {
      e.preventDefault()
      try {
         let orderItems = []
         for (const items in cartItems) {

            for (const item in cartItems[items]) {

               if (cartItems[items][item] > 0) {
                  const itemInfo = structuredClone(products.find(product => product._id === items))
                  if (itemInfo) {
                     itemInfo.size = item
                     itemInfo.quantity = cartItems[items][item]
                     orderItems.push(itemInfo)
                  }
               }


            }
         }

         let orderData = {
            address: formData,
            items: orderItems,
            amount: getCartAmount() + delivery_fee
         }

         switch (method) {
            case 'cod':
               const response = await axios.post(backendUrl + '/api/order/place' , orderData , {headers: {token}})
               if (response.data.success) {
                  setCartItems({})
                  navigate('/orders')
               }
               else{
                  toast.error(response.data.message)
               }
               break;

            default:
               break;
         }

      } catch (error) {
         console.log(error);
         toast.error(error.message)
      }
   }

   return (
      <form onSubmit={onSubmutHandeler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

         {/* ------------------------left side----------------------------- */}

         <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
            <div className='text-xl sm:text-2xl my-3'>
               <TItle text1={"DELIVERY"} text2={'INFORMATION'} />
            </div>
            <div className='flex gap-3'>
               <input required onChange={onChangeHandeler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" placeholder='First Name' />
               <input required onChange={onChangeHandeler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
            </div>
            <input required onChange={onChangeHandeler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
            <input required onChange={onChangeHandeler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
            <div className='flex gap-3'>
               <input required onChange={onChangeHandeler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
               <input required onChange={onChangeHandeler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
            </div>
            <div className='flex gap-3'>
               <input required onChange={onChangeHandeler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
               <input required onChange={onChangeHandeler} name='phone' value={formData.phone} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' />
            </div>
         </div>

         {/* ---------------------------RIght sideee -------------------*/}
         <div className='mt-8'>
            <div className='mt-8 min-w-80'>
               <CartTotal />
            </div>
            <div className='mt-12'>
               <TItle text1={'PAYMENT'} text2={'METHOD'} />

               {/* ----------------payment methods ------------------- */}

               <div className='flex gap-3 flex-col-3 lg:flex-row'>
                  <div onClick={() => { setMethod('cod') }} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                     <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''} `}></p>
                     <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                  </div>
               </div>
               <div className='w-full text-end mt-8'>
                  <button type='submit' className='bg-black text-white px-16 py-3 text-sm rounded-md  active:bg-gray-700'>PLACE ORDER</button>
               </div>
            </div>
         </div>
      </form>
   )
}

export default PlaceOrder
