import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import TItle from '../components/TItle';
import ProductItem from '../components/ProductItem';
import Hero from '../components/Hero';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [shoeFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  // const [hero,setHero]=useState(true);


  // for storing valuee of Category for filter
  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setCategory(c => c.filter(item => item !== e.target.value))
    }
    else {
      setCategory(c => [...c, e.target.value])
    }
  }

  // for storing sub category value for filtering
  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(s => s.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(s => [...s, e.target.value])
    }
  }


  // filter function for filtering

  const applyFilter = () => {
    let productsCopy = products.slice();
    // for search function
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
      // setHero(false)
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProduct(productsCopy)
  }

  // for shortng

  const sortProducts = () => {

    let fpCopy = filterProduct.slice();

    switch (sortType) {
      case 'low-high':

        setFilterProduct(fpCopy.sort((a, b) => (a.price - b.price)));

        break;

      case 'high-low':
        setFilterProduct(fpCopy.sort((a, b) => (b.price - a.price)));

        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])


  useEffect(() => {
    sortProducts();
  }, [sortType])

  // useEffect(()=>{
  //   console.log(subCategory);
  // },[subCategory])

  return (
    <>

      <Hero />
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* Filterss */}

        <div className='min-w-60'>
          <p onClick={() => setShowFilter(!shoeFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
            <img className={`h-3 sm:hidden ${shoeFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
          </p>
          {/* Categories */}
          <div className={`border border-e-gray-300 pl-5 py-3 mt-6 ${shoeFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 test-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> kids
              </p>
            </div>
          </div>

          {/* SUB CATOGERIES */}
          <div className={`border border-e-gray-300 pl-5 py-3 my-5 ${shoeFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 test-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
              </p>
            </div>
          </div>

        </div>

        {/* Display COllections */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <TItle text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Sort  functionn  */}
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' >
              <option value="relevant">Sort by: Relevance</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* displaying ALL Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProduct.map((item, index) => (
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

      </div>
    </>
  )
}

export default Collection
