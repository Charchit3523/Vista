import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import TItle from './TItle';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            // Filter products based on category and subCategory
            const productsCopy = products.filter((item) =>
                item.category === category && item.subCategory === subCategory
            );

            // Update state with the first 5 related products
            setRelated(productsCopy.slice(0, 5));

        }

    }, [products, category, subCategory]);

    return (
        <div className='my-24'>
            <div className='text-center text3xl py-2'>
                <TItle text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    related.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default RelatedProducts;
