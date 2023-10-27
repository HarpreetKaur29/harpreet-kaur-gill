import React from 'react';
import Polygon from '../../assets/svgs/Polygon.svg';


const Header = () => {
  return (
    <div className='container mx-auto px-16'>
      <div className="flex py-5 justify-between items-center relative">
        <div className='text-[#113C49] font-bold text-2xl relative'>
         <span className="z-10 relative">LearnHub</span>
        <img className='absolute left-0 top-1/2 -translate-y-1/2 transform -translate-x-1/2 w-12 h-12 ' src={Polygon} alt="logo" />
        </div>
        <ul className='flex items-center list-none space-x-12'>
          <li>Home</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>
            <button className='bg-primary text-white py-2 text-lg px-12 rounded-full'>
              Login
            </button>
          </li>
          <li>
            <button className='bg-secondary text-white py-2 text-lg px-12 rounded-full'>
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
