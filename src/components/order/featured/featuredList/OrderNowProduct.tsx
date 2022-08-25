// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Size from './Size'
import style from './FeaturedStyle.module.css'
import { useParams } from 'react-router-dom'
import OrderNowProductItem from './OrderNowProductitem'

const OrderNowProduct = ({ data, setSizeCoast,setest,test,settest1,test1,setData}) => {
  const {product_id} = useParams();
  const recommended = data.data.filter((item) => item.recommended == 'Y' && item.product_id != product_id )
  return <>
    {
      recommended.map((item) => (
        <OrderNowProductItem key={item.product_id} data={item} setest={setest} setSizeCoast={setSizeCoast} test={test} settest1={settest1} style={style} test1={test1} setData={setData}/>
      ))
    }
  </>
}

export default OrderNowProduct;
