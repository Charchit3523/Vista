import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {

    if (!token) {
      return null;
    }

    try {

      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      

      if (response.data.success) {
        setOrders(response.data.orders)
      }
      else {
        toast.error(response.data.message)
      }


    } catch (error) {
      console.log(error)
      toast.error('this is the catch block:' + error.message)
    }

  }

  const statusHandeler = async (event,orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', {orderId,status:event.target.value}, { headers: { token } })
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error('this is the catch block:' + error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div>
      <h3>Orders</h3>
      <div>
        {
          orders.map((order, index) => (
            <div className='grid grin-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_2fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
              <img className='w-12' src={assets.parcel_icon} alt="" />
              <div>
                <div>
                  {
                    order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return <p className='py-0.5' key={index}>
                                  {item.name} x {item.quantity}
                                  <span>
                                    {item.size}
                                  </span>
                                </p>
                      }
                      else {
                        return <p className='py-0.5' key={index}>
                                  {item.name} x {item.quantity}
                                  <span>
                                    {item.size}
                                  </span>,
                                </p>
                      }
                    })
                  }
                </div>
                {/* Users detail */}
                <p className='mt-3  font-medium'>
                  Name : {
                    order.address.firstName + " " + order.address.lastName
                  }
                </p>
                <div>
                  <p >
                    Address : {
                      order.address.city + ", " + order.address.state + ", " + order.address.country
                    }
                  </p>
                </div>

                <p>
                  Phone Number : {
                    order.address.phone
                  }
                </p>
              </div>
              {/* Product details */}
              <div>
                <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
                <p className='mt-3'>Mathod : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? 'Done' : 'Pending'} </p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p className='text-sm sm:text-[15px]'> {currency} {order.amount}</p>
              <select onChange={(event)=>statusHandeler(event,order._id)} value={order.status} className='p-2 font-semibold'>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
