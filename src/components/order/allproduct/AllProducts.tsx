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
  useEffect(()=>{
    getCafesMenusAll(cafe_id)
    .then(res => SetData(res.data))
  },[cafe_id])
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 hidden lg:block">
         <FilterContainer  data={data}/>
        </div>
        <div className="basis-full font-semibold pb-4">
          <ProductContainer data={data}/>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;