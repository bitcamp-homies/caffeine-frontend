// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';

const Drinks = ({data}) => {
  const result = [...new Set( data.map(item => item.subcategory))];
  console.log(data)
  return (
    <div className="flex flex-col gap-3 pt-3 text-gray-400 font-semibold text-xs">
      {
        result.map((item) => (
          <Link to={`Drinks/${item}`}><div>{item}</div></Link>
        ))
      }
    </div>
  );
};

export default Drinks;