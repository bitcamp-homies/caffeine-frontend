// @ts-nocheck
import React from 'react';
import { Route, useLocation, useParams } from 'react-router-dom';
import DetailContainer from './DetailContainer';
import FilterContainer from './FilterContainer';

const AllDetails = () => {
  const {data} = useLocation().state
  const {menu} = useParams();
  //console.log(data.filter((item) => item.subcategory === drink))
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 hidden lg:block">
          {data !== undefined && <FilterContainer data={data} cafe_name={useLocation().state.cafe_name}/> }
        </div>
        <div className="basis-full font-semibold pb-4">
          {data !== undefined && <DetailContainer data={data.filter((item) => item.subcategory === menu)} menu={menu} cafe_name={useLocation().state.cafe_name}/>}
        </div>
      </div>
    </div>
  );
};

export default AllDetails;