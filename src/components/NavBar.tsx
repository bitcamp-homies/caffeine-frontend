import React from 'react';

const NavBar = () => {
  return (
    <nav className='flex justify-between my-5 items-center	pb-5 border-b-gray-300 border-b-2'>
          <div>
            <ul className='items-center	flex flex-row font-bold '>
              {/* 아래 li Link 남음. */}
              <li className =' mx-8 '><img className=' w-16 h-16' src="img/logo1.png" alt='main_logo'/></li>
              <li className='mx-4 '>ORDER</li>
              <li className='mx-4 '>CARDS</li>
              <li className='mx-4 '>GIFT</li>
            </ul>
          </div>
          
          <div className=''>
            <ul className='	flex flex-row'>
              {/* 아래 li Link 남음. */}
              <li className='font-bold mx-10'><img className='inline-block w-7' alt='map_pin' src='img/map_pin.jpg'></img>Find a store</li>
              <li>
                <button className=' text-sm mx-1 text-center w-20 h-8 rounded-full border-2 border-gray-900 bg-white '>Sign in</button>
              </li>
              <li>
                <button className=' text-sm mx-1 mr-6 text-center w-20 h-8 rounded-full border-2 bg-black text-white '>Join now</button>
              </li>
            </ul>
          </div>
      </nav>
  );
};

export default NavBar;