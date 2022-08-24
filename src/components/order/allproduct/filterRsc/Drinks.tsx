// @ts-nocheck
import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Drinks = ({data}) => {
  let navigate = useNavigate();
  const Drinks = data.filter((item) => item.category === 'Drinks')
  const result = [...new Set( Drinks.map(item => item.subcategory))];
  console.log(Drinks)
  return (
    <div className="flex flex-col gap-3 pt-3 text-gray-400 font-semibold text-xs">
      {data !== undefined &&
        result.map((item) => (
         <Link to={`./Drinks/${item}`} state={{data : data}}><div>{item}</div></Link>
        ))
      }
    </div>
  );
};

export default Drinks;