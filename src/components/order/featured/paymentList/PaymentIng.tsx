//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation, useParams } from 'react-router-dom'
import { getCafeitemList, getProductInfo, savePaymentList } from 'store/api'
import { setTimeout } from 'timers/promises';

const PaymentIng = () => {
  const { cafe_id, product_id,completeNumber} = useParams()
  const totalPrice = sessionStorage.getItem("totalPrice")
  const qs = require("qs");
  //가격 총합 가져오기
  // const location = useLocation();
  // const totalPrice = location.state?.totalPrice;
  //제품 정보 모두가져오기
  const {
    data: productdata,
  } = useQuery(['getCafeitemList', cafe_id], () => getCafeitemList(cafe_id))

  //메인 제품 정보 모두 가져오기
  const {
    data:mainProductInfo,
    isSuccess,
    isError,
    isLoading,
  } = useQuery(['getProductInfo', product_id], () => getProductInfo(product_id))

  //추가 메뉴
  const name = []
  const price = []
  const count = []
  const size = []
  const sizePrice = []

  //추천메뉴 세션값 가져오기
  productdata?.data.map((item, index) => {
    name[index] = sessionStorage.getItem(
      `recomendedProductName${item.product_name_kor}` == null,
    )
    price[index] = sessionStorage.getItem(
      `recomendedProductPrice${item.product_name_kor}`,
    )
    count[index] = sessionStorage.getItem(
      `recomendedCount${item.product_name_kor}`,
    )
    size[index] = sessionStorage.getItem(
      `recommendedSize${item.product_name_kor}`,
    )
    sizePrice[index] = sessionStorage.getItem(
      `recommendedSizePrice${item.product_name_kor}`,
    )
  })
  const productCount = count.filter((item) => item !== null)
  
  
  //메인상품카운트
  const mainProductCount = sessionStorage.getItem('mainProductCount')
  
  //insert재료 총 6가지
  const user_id = sessionStorage.getItem('User_id');
  let [product_count, setProduct_count] = useState(0);
  

  //갯수총합 구하기
  productCount.map(item =>
      product_count += Number(item[0])
  )
  //모든 메뉴 갯수
  const totalCount = Number(product_count) + Number(mainProductCount)
  
  const paymentList = {
    user_id : user_id,
    cafe_id : cafe_id,
    product_id : product_id,
    total_price : totalPrice,
    product_count : totalCount,
    purchase_way : completeNumber,
  }
  useEffect(()=>{
    savePaymentList(qs.stringify(paymentList));
    //페이지 바로이동
    window.location.href=`http://localhost:3000/order/featured/order-now/cafe/${cafe_id}/product/${product_id}/payment/paymenting/${completeNumber}/paymentcomplete`
  },[])
  return (
    <div>
      하이하이
    </div>
  );
};

export default PaymentIng;