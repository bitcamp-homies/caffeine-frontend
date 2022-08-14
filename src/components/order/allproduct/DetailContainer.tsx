import React from 'react';
import DrinksDetail from './productRsc/DrinksDetail';

const DetailContainer = () => {
  return (
    <div className="bg-white grid gap-5 grid-col px-6 pt-5 ">
      <div className="pb-4 pt-5 text-bold text-3xl font-bold">Menu</div>
      <div className="text-xl font-bold pb-2">
        Drinks
      </div>
      <hr/>
        <DrinksDetail />
    </div>
  );
};
export default DetailContainer;