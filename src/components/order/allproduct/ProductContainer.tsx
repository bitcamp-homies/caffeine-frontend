// @ts-nocheck

import React from 'react'
import { Route } from 'react-router-dom'

import Drinks from './productRsc/Drinks'

const ProductContainer = ({data,cafe_name}) => {
  return (
    <div className="grid-col grid gap-5 bg-white px-6 pt-5 ">
    <div className="text-bold pb-4 pt-5 text-3xl font-bold">{cafe_name}</div>
      {
        data.map((item) => (
          <>
           <div className="pb-2 text-xl font-bold" key={item.cafe_id}>{item.subcategory}</div>
             <Drinks data={item}/>
             <hr />
          </>
        ))
      }

    </div>
      <div className="text-bold pb-4 pt-5 text-3xl font-bold">Menu</div>
      <div className="pb-2 text-xl font-bold">Best Menu</div>
      <hr />
      <Drinks />
      <div className="pt-5 text-xl font-bold">Drinks</div>
      <hr />
      <Drinks />
    </div> 
  )
}

export default ProductContainer
