import React from 'react';
import Logo from './Logo';
import MapMarker from './MapMarker';

const navBar = () => {
  return (
    <div className='px-4 py-4 md:px-6 md:py-6 lg:px-10 lg:py-6 flex flex-row'>
      <Logo />
      <div className='w-full hidden md:flex flex-row'>
        <ul className='mx-10 list-none font-bold self-center'>
          <li className='inline-block mr-7 text-sm'>
            <button>ORDER</button>
          </li>
          <li className='inline-block mr-7 text-sm'>
            <button>CARDS</button>
          </li>
          <li className='inline-block text-sm'>
            <button>GIFT</button>
          </li>
        </ul>
        <div className='ml-auto flex flex-row flex-shrink-0 self-center'>
          <MapMarker />
          <button className='ml-4 mr-10 font-semibold text-sm'>Find a store</button>
          <button className='px-4 py-1.5 border border-black rounded-full font-semibold text-sm'>Sign in</button>
          <button className='ml-4 px-4 py-1.5 border border-black bg-black text-white rounded-full font-semibold text-sm'>Join now</button>
        </div>
      </div>
    </div>
  );
};

export default navBar;