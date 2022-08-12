import React from 'react';
import CafesContainer from './CafesContainer';
import LocaContainer from './LocaContainer';

const AllCafes = () => {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 hidden lg:block">
          <LocaContainer />
        </div>
        <div className="basis-full font-semibold pb-4">
          <CafesContainer />
        </div>
      </div>
    </div>
  );
};


export default AllCafes;