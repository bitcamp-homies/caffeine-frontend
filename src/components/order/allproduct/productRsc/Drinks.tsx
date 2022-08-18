import React from 'react';
import { Link,} from 'react-router-dom';

const Drinks = () => {

  return (
    <div className="grid grid-cols-1 text-xs pt-5 gap-4 md:grid-cols-2 md:text-sm w-auto"> {/* axios 작업분량 */}
      <Link to="./hot-coffees">
      <div className="flex flex-row gap-3 bg-white h-20 items-center md:h-28">
        <img className="object-fill rounded-full h-20 w-20 md:h-28 md:w-28" src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"></img>
        <p>Best Menu</p>
      </div>
      </Link>
      <Link to="./hot-teas">
      <div className="flex flex-row gap-3 bg-white h-20 items-center md:h-28">
        <img className="object-fill rounded-full h-20 w-20 md:h-28 md:w-28" src="https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_wide_topcrop_630"></img>
        <p>Hot Teas</p>
      </div>
      </Link>
    </div>
  );
};

export default Drinks;

