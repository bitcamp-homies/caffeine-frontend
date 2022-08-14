import React from 'react';
import CafesDetailContainer from './CafesDetailContainer';
import LocaContainer from './LocaContainer';

const AllCafesLocation = () => {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 hidden lg:block">
          <LocaContainer />
        </div>
        <div className="basis-full font-semibold pb-4">
          <CafesDetailContainer />
        </div>
      </div>
    </div>
  );
};

export default AllCafesLocation;