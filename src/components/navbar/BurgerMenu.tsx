import React, { useState } from 'react';

interface BurgerProps {
  toggled: boolean
}

const BurgerMenu = (props :BurgerProps) => {
  console.log('BurgerMenu: ' + props.toggled)
  return (
    <div id='burgerMenu' className={props.toggled ? 'fixed z-20' : 'hidden'}>
      <p className='text-white'>Hello World</p>
    </div>
  );
};

export default BurgerMenu;