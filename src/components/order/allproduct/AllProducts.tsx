// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import FilterContainer from './FilterContainer';
import ProductContainer from './ProductContainer';
import { useLocation } from 'react-router-dom';
import { getCafesMenusAll } from 'store/api' 
const AllProducts = () => {
  const [data,SetData] = useState([])
  const {cafe_id} = useParams()
  const {cafe_name} = useLocation().state
  useEffect(()=>{
    getCafesMenusAll(cafe_id)
    .then(res => SetData(res.data))
  },[cafe_id])

  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 hidden lg:block">
        {data !== undefined && <FilterContainer  data={data} cafe_name={cafe_name}/>}
        </div>
        <div className="basis-full font-semibold pb-4">
          {data !== undefined && <ProductContainer data={data} cafe_name={cafe_name}/> }
        </div>
      </div>
    </div>
  );
};

export default AllProducts;