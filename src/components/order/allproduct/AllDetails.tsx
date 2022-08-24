// @ts-nocheck
import React from 'react';
import { Route, useLocation, useParams } from 'react-router-dom';
import DetailContainer from './DetailContainer';
import FilterContainer from './FilterContainer';

const AllDetails = () => {
  console.log(useLocation().state)
  const {data} = useLocation().state
  const {drink} = useParams();
  console.log(data.filter((item) => item.subcategory === drink))
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