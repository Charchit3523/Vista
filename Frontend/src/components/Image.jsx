import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Image = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const navigateCollection = () => {
        navigate('/collection'); // Use the navigate function to go to '/collection'
    };

    return (
        <img  
            onClick={navigateCollection} // Call the function directly
            className='w-full' 
            src={assets.image} 
            alt="Descriptive Alt Text" // Add a descriptive alt text for accessibility
        />
    );
};

export default Image;
