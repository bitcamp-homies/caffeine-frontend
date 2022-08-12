import React from 'react';
import FilterContainer from './FilterContainer';
import ProductContainer from './ProductContainer';

const AllProducts = () => {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 hidden lg:block">
          <FilterContainer />
        </div>
        <div className="basis-full font-semibold pb-4">
          <ProductContainer />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;