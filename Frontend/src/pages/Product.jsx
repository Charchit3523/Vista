import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
const {productId}=useParams();
const {products,currency,addToCart}= useContext(ShopContext);
const [productData,setProductData] = useState(false);
const [image,setImage] = useState('');
const [size,setSize]=useState('');

const fetchProductData= async () => {

  products.map((item)=>{
      if (item._id===productId) {
          setProductData(item);
          setImage(item.image[0])
          
          
          return null;
      }
  })
}

useEffect(()=>{
    fetchProductData();
},[productId,products])

  return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
          {/* product data */}
          <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

               {/*  product images*/}
              <div className='flex-1 flex-col-reverse  gap-3 sm:flex-row'>

                  <div className='w-full sm:w-[80%] '>
                        <img src={image} className='w-full h-auto ' alt="" />
                  </div>
                  <div className='flex sm:flex-row mt-2  justify-between sm:justify-normal sm:w-[18.7%] w-full '>
                      {
                        productData.image.map((item,index)=>(

                             <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mr-3 flex-shrink-0 cursor-pointer' alt="" />
                        ))
                      }
                  </div>
              </div>
              {/*  product info*/}
              <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <div className='flex items-center gap-1 mt-2'>
                  <img src={assets.star_icon} alt="" className="w-3 5" />
                  <img src={assets.star_icon} alt="" className="w-3 5" />
                  <img src={assets.star_icon} alt="" className="w-3 5" />
                  <img src={assets.star_icon} alt="" className="w-3 5" />
                  <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                  <p className='pl-2'>(122)</p>

                </div>
                <p className='mt-5 test-3xl font-medium'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                      <p>Select sizs</p>
                      <div className='flex gap-2'>
                          {productData.sizes.map((item,index)=>(
                              <button onClick={()=>{setSize(item)}} className = {`border  py-2 px-4 bg-gray-10 hover:bg-slate-950 hover:text-white ${item === size? 'border-black' : ''}`} key={index}>{item}</button>
                          ))}
                      </div>
                </div>
                <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded-md'>ADD TO CART</button>
                <hr className='mt-8 sm:w-4/5'/>
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                      <p>100% Orginal Product.</p>
                      <p>Cash on delivery is available on this product.</p>
                      <p>Easy return and exchange policy withn 7 days</p>
                </div>
              </div>
              

          </div>
          {/* description and review section  */}
          <div className='mt-20'>
            
            <div className='flex'>
                  <b className='border px-5 py-3 text-sm'>Desciption</b>
                  <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
            </div>

            <div className='flex flex-col gap-4  text-gray-500 border px-6 py-6 text-sm'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius similique ut blanditiis. Nesciunt, ipsa libero necessitatibus fugiat ipsum quisquam sint quasi pariatur nisi recusandae ad impedit error minus commodi reprehenderit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deleniti nobis deserunt exercitationem aspernatur rerum facere odit itaque, voluptatibus natus eos fugiat unde placeat. Provident minima obcaecati iure repudiandae sunt.</p>
            </div>
            {/* display related products */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
          </div>
        </div>
  ) : <div className='opacity-0'></div>
} 

export default Product
