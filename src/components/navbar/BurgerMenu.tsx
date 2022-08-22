import React, { useState } from 'react';

interface BurgerProps {
  toggled: boolean
}

const burgerMenuClass = 'fixed z-20 bg-black h-full w-full bg-black-rgba flex flex-row'

const BurgerMenu = (props :BurgerProps) => {
  return (
    <div id='burgerMenu' className={props.toggled ? burgerMenuClass : 'hidden'}>
      <div className='bg-white basis-10/12'>
        
      </div>
    </div>
  );
};

export default BurgerMenu;