import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import TItle from './TItle'; // Keeping the original casing as per your specification
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Filter for best-selling products and limit to the top 5
    const bestProducts = products.filter(item => item.bestseller);
    setBestSellers(bestProducts.slice(0, 4));
  }, [products]); // Added products as a dependency

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <TItle text1={'BEST'} text2={'SELLERS'} /> {/* Using TItle with correct casing */}
        <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum consectetur vel mollitia consequatur eius asperiores nisi magnam.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6'>
        {bestSellers.map(item => (
          <ProductItem 
            key={item._id} 
            id={item._id} 
            name={item.name} 
            image={item.image} 
            price={item.price} 
          />
        ))}
      </div>
      <hr className='mt-6'></hr>
    </div>
  );
}

export default BestSeller;