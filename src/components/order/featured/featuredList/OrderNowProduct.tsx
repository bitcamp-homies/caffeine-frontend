// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Size from './Size'
import style from './FeaturedStyle.module.css'
import { useParams } from 'react-router-dom'
import OrderNowProductItem from './OrderNowProductItem'

const OrderNowProduct = ({
  data, //모든 제품 정보
  setSizePrice, //메인제품 사이즈 가격
  setRecommendedSizePrice, //추천메뉴 사이즈 가격
  setRecommendedCount, //추천메뉴 사이즈 수량
  setRecommendedPrice, // 추천메뉴 사이즈 가격
  mainProduct, //메인 제품
}) => {
  const { product_id } = useParams()
  const recommended = data.data.filter(
    (item) =>
      item.recommended == 'Y' &&
      item.product_id != product_id &&
      item.category != mainProduct.category,
  )
  
  return (
    <>
      {recommended.map((item) => (
        <OrderNowProductItem
          key={item.product_id}
          data={item}
          setRecommendedSizePrice={setRecommendedSizePrice} //추천메뉴 사이즈 가격
          setSizePrice={setSizePrice} // 추천메뉴 가격
          setRecommendedCount={setRecommendedCount} //추천메뉴 총 수량
          style={style} //CSS
          setRecommendedPrice={setRecommendedPrice} //추천메뉴 가격
        />
      ))}
    </>
  )
}

export default OrderNowProduct
