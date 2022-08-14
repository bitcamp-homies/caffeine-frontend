import React from 'react';
import { Link } from 'react-router-dom';

const Drinks = () => {
  return (
    <div className="flex flex-col gap-3 pt-3 text-gray-400 font-semibold text-xs">
      <div>Hot Coffees</div>
      <div>Hot Teas</div>
      <div>Hot Drinks</div>
      <div>Frappuccino Blended Beverage</div>
      <div>Cold Coffees</div>
      <div>Iced Teas</div>
      <div>Cold Drink</div>
    </div>
  );
};

export default Drinks;