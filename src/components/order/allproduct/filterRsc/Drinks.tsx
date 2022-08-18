import React from 'react';
import { Link } from 'react-router-dom';

const Drinks = () => {
  return (
    <div className="flex flex-col gap-3 pt-3 text-gray-400 font-semibold text-xs">
      <Link to="./hot-coffees">Hot Coffees</Link>
      <Link to="./hot-teas">Hot Teas</Link>
      <Link to="./hot-drinks">Hot Drinks</Link>
      <Link to="./hot-Frappucino">Frappuccino Blended Beverage</Link>
      <Link to="./cold-coffees">Cold Coffees</Link>
      <Link to="./ice-teas">Iced Teas</Link>
      <Link to="./cold-drink">Cold Drink</Link>
    </div>
  );
};

export default Drinks;