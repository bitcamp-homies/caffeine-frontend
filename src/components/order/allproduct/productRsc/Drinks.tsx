// @ts-nocheck
import React from 'react';
import { Link,} from 'react-router-dom';

const Drinks = ({data}) => {
  return (
    <div className="grid w-auto grid-cols-1 gap-4 pt-5 text-xs md:grid-cols-2 md:text-sm">
      <Link to={`/order/featured/order-now/cafe/${data.cafe_id}/product/${data.product_id}`}>
        <div className="flex h-20 flex-row items-center gap-3 bg-white md:h-28">
          <img
            className="h-20 w-20 rounded-full object-fill md:h-28 md:w-28"
            src="https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_wide_topcrop_630"
          ></img>
          <div className="items-left flex flex-col gap-1">
            <p>{data.name_kor}</p>
            <p>{data.name_eng}</p>
            <p>₩ {(data.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            
          </div>
        </div>
      </Link>
  </div>
  );
};

export default Drinks;

