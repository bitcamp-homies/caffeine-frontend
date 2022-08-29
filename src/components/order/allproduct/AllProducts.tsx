// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import FilterContainer from './FilterContainer';
import ProductContainer from './ProductContainer';
import { useLocation } from 'react-router-dom';
import { getCafeitemList } from 'store/api' 
const AllProducts = () => {
  const [data,SetData] = useState([])
  const {cafe_id} = useParams()
  const {cafe_name} = useLocation().state
  
  useEffect(()=>{
    getCafeitemList(cafe_id)
    .then(res => SetData(res.data))
  },[cafe_id])

  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 hidden lg:block">
        {data !== undefined && useLocation().state.img !== null && <FilterContainer  data={data} cafe_name={cafe_name} img={useLocation().state.img}/>}
        </div>
        <div className="basis-full font-semibold pb-4">
          {data !== undefined && useLocation().state.img !== null && <ProductContainer data={data} cafe_name={cafe_name} img={useLocation().state.img}/> }
        </div>
      </div>
    </div>
  );
};

export default AllProducts;