import React from 'react';
import Cafes from './cafesRsc/Cafes';

const CafesContainer = () => {

  return (
    <div className="bg-white grid gap-5 grid-col px-6 pt-5 ">
      <div className="pb-4 pt-5 text-bold text-3xl font-bold">Place</div>
      <div className="text-xl font-bold pb-2">
        Gang-nam
      </div>
      <hr/>
        <Cafes />
    </div>
  );
};

export default CafesContainer;