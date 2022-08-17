import React from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {
  return (
    <div className="flex flex-col gap-3 pt-3 text-gray-400 font-semibold text-xs">
      <a href="#">Gang-nam</a>
      <Link to="../cafes/location">Yong-san</Link>
      <a href="#">Seung-buk</a>
      <a href="#">Mapo</a>
      <a href="#">Song-pa</a>
      <a href="#">Gwan-ak</a>
    </div>
  );
};

export default Locations;