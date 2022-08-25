// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({data,cafe_name}) => {
  const Food = data.filter((item) => item.category === 'Food')
  const result = [...new Set(Food.map(item => item.subcategory))];
  return (
    <div className="flex flex-col gap-3 pt-3 text-gray-400 font-semibold text-xs">
       {data !== undefined &&
        result.map((item) => (
         <Link to={`/order/cafes/menu/${data[0].cafe_id}/Drinks/${item}`} 
         state={{data : data,cafe_name : cafe_name}}><div>{item}</div></Link>
        ))
      }
    </div>
  );
};

export default Food;