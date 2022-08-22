// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Size from './Size'
import style from './FeaturedStyle.module.css'
import { useParams } from 'react-router-dom'

import OrderNowProductItem from './OrderNowProductItem';

const OrderNowProduct = ({ data, setSizeCoast, setRecommendPrice}) => {
  const {product_id} = useParams();
  const recommended = data.data.filter((item) => item.recommended == 'Y' && item.product_id != product_id )
  return <>
    {
      recommended.map((item) => (
        <OrderNowProductItem key={item.product_id} data={item} setSizeCoast={setSizeCoast} setRecommendPrice={setRecommendPrice} style={style} />
      ))
    }
  </>
}

export default OrderNowProduct;
