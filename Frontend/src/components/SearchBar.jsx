import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes('collection'));
  }, [location]);

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center p-4'>

      <div className='flex items-center justify-center border border-gray-400 rounded-full w-full max-w-md mx-auto transition-all duration-300 ease-in-out'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-transparent text-sm px-4 py-2 rounded-l-full'
          type="text"
          placeholder='Search for products...'
          aria-label="Search products"
        />
        <button className='bg-transparent text-gray-600 hover:text-blue-500 rounded-r-full px-4 py-2 transition duration-200'>
          <img className='w-4' src={assets.search_icon} alt="Search" />

        </button>
        <img
          onClick={() => setShowSearch(false)}
          className='w-3 cursor-pointer mr-4' // Added margin-left for spacing
          src={assets.cross_icon}
          alt="Close Search Bar"
        />

      </div>

    </div>
  ) : null;
}

export default SearchBar;
