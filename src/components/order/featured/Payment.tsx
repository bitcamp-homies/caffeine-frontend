// @ts-nocheck
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Cafeinfo from './featuredList/Cafeinfo'
import PaymentProduct from './paymentList/PaymentProduct'

const payment = () => {
  const [paymentOption, setPaymentOption] = useState('1')
  const { totalPrice, cafe_id, product_id} = useParams();
  const paymentOptionHandler = (e) => {
    setPaymentOption(e.target.value)
  }
  return (
    <>
      <Cafeinfo />
      <div className="mt-5 mb-5 text-center">
        <p className="text-2xl font-bold">주문 내역</p>
      </div>
      <div className="mx-auto mb-24 h-full w-full border lg:w-[700px]">
        <PaymentProduct cafe_id={cafe_id} product_id={product_id}/>

        <div className="flex flex-col border-t p-5">
          <p className="text-xl font-bold">결제 수단</p>
          <label>
            <input
              type="radio"
              checked={paymentOption === '1'}
              onChange={paymentOptionHandler}
              value="1"
            />
            <span className="ml-2 lg:text-xl">카카오페이 결제</span>
          </label>
          <label>
            <input
              type="radio"
              checked={paymentOption === '2'}
              onChange={paymentOptionHandler}
              value="2"
            />
            <span className="ml-2 lg:text-xl">포인트 결제</span>
            <span className='text-gray-400 text-sm ml-3'>포인트 결제시 ?% 할인혜택</span>
          </label>
        </div>
        <div className="flex flex-col border-t p-5">
          총 결제금액 : {totalPrice}
        </div>
      </div>
      <div className="fixed bottom-0 h-[70px] w-full bg-red-800">
        <div className="my-5 ml-5 inline-block">
          <p className="text-xl text-white">Total Pay : {totalPrice}</p>
        </div>
        <div className="float-right mt-2 mr-3 inline-block rounded-3xl border p-3 text-white lg:mr-10">
          <button className="text-xl text-white">payment</button>
        </div>
      </div>
    </>
  )
}

export default payment
