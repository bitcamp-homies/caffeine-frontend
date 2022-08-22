import React, { useState } from 'react';

interface BurgerProps {
  toggled: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

const burgerMenuClass = 'fixed bg-black h-full w-full bg-black-rgba flex flex-row-reverse z-40'

const BurgerMenu = (props :BurgerProps) => {
  return (
    <div id='burgerMenu' className={props.toggled ? burgerMenuClass : 'hidden'}>
      <div className='bg-white basis-10/12 pt-10 px-2'>
        <ul>
          <li className='mb-8 px-6 text-2xl'>
            Order
          </li>
          <li className='mb-8 px-6 text-2xl'>
            Cards
          </li>
          <li className='mb-8 px-6 text-2xl'>
            Gift
          </li>
        </ul>
        <hr className='mx-6 border bg-gray-300 border-gray-300' />
        <div className='flex flex-row px-5 pt-8'>
          <button className='text-sm px-3 py-1 mr-4 bg-white border rounded-full border-black'>Sign in</button>
          <button className='text-sm px-3 py-1 bg-black text-white border rounded-full'>Join now</button>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;