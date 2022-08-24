// @ts-nocheck
import React from 'react';
import Drinks from './filterRsc/Drinks';
import Food from './filterRsc/Food';

const FilterContainer = ({data}) => {
  // const Drinks = data.filter((item) => item.category === 'Drinks')
  // const Food = data.filter((item) => item.category === 'Food')
  return (
    <div className="flex flex-col gap-4 text-center px-3 pt-5 font-semibold">
      <div className="bg-white pt-5 text-xl">Drinks
      <Drinks data={data.filter((item) => item.category === 'Drinks')}/>
      </div>
      <div className="bg-white pt-5 text-xl">Food
      <Food data={data.filter((item) => item.category === 'Food')}/>
      </div>
   </div>
  
  );
};

export default FilterContainer;