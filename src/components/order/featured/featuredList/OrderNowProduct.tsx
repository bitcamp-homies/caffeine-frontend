// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Size from './Size'
import style from './FeaturedStyle.module.css'
import { useParams } from 'react-router-dom'
import OrderNowProductitem from './OrderNowProductitem'
const OrderNowProduct = ({ data,product_id,setSizeCoast,setCount,setRecomendCoast,count }) => {

  const productPrice = 15000

  const recommended = data?.data.filter((item) => item.recommended == 'Y' && item.product_id != product_id)

  const recommendedMenu = recommended.map((item) => (
    <OrderNowProductitem key={item.product_id} item={item} setSizeCoast={setSizeCoast} count1={count} setCount1={setCount} setRecomendCoast={setRecomendCoast} style={style}/>
  ))

  return <>{recommendedMenu}</>
}

export default OrderNowProduct
