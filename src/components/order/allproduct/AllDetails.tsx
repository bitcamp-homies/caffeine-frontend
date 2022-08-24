// @ts-nocheck
import React from 'react';
import { Route } from 'react-router-dom';
import DetailContainer from './DetailContainer';
import FilterContainer from './FilterContainer';

const AllDetails = () => {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 hidden lg:block">
          <FilterContainer />
        </div>
        <div className="basis-full font-semibold pb-4">
          <DetailContainer />
        </div>
      </div>
    </div>
  );
};

export default AllDetails;