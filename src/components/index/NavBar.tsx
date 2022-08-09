import React from 'react';
import Logo from './Logo';


const navBar = () => {
  return (
    <div className='px-4 py-4 md:px-6 md:py-4 lg:px-10 lg:py-4 flex flex-row'>
      <Logo />
      <ul className='ml-6 list-none font-bold self-center'>
        <li className='inline-block mr-7'>
          <button>ORDER</button>
        </li>
        <li className='inline-block mr-7'>
          <button>CARDS</button>
        </li>
        <li className='inline-block'>
          <button>GIFT</button>
        </li>
      </ul>
      <div className='ml-auto flex-shrink-0'>
        <button>Join now</button>
      </div>
    </div>
  );
};

export default navBar;<h1>NavBar</h1>