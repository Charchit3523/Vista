import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import TItle from './TItle';
import ProductItem from './ProductItem';

const LatestCollection = () => {

const {products}=useContext(ShopContext);
const [latestProducts,setLatestProducts]=useState([]);
console.log(products);
useEffect(()=>{
    setLatestProducts(products.slice(0,8))
},[])

return (
    <div className='my-10'>

        <div className='text-center py-8 text-3xl'>
            <TItle text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita 
            </p>
        </div>

        {/* Rendering products */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>

    </div>
  )
}

export default LatestCollection
