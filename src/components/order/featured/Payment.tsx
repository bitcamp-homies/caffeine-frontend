// @ts-nocheck
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { kakaoAPI } from 'store/api'
import Cafeinfo from './featuredList/Cafeinfo'
import PaymentProduct from './paymentList/PaymentProduct'

const productCount = 1
const productName = "몰라"

const payment = () => {
  const [paymentOption, setPaymentOption] = useState('1')
  const { totalPrice, cafe_id, product_id} = useParams();
  const paymentOptionHandler = (e) => {
    setPaymentOption(e.target.value)
  }

  function kakaocall(productName,productCount,totalPrice){
    const temp = axios.post({
      url: "/v1/payment/ready",
      headers: {
        //카카오 dev에 등록한 admin Key 등록
        Authorization : "KakaoAK 7d170046a599f182cb614154a7298d41",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params: {
        cid: "TC0ONETIME",
        partner_order_id: "partner_order_id",
        partner_user_id: "partner_user_id",
        item_name: productName,
        quantity: productCount,
        total_amount: totalPrice,
        vat_amount: 0,
        tax_free_amount: 0,
        //성공
        approval_url: "http://localhost:3000/",
        //실패
        fail_url: "http://localhost:3000/",
        //취소
        cancel_url: "http://localhost:3000/",
      },
    }).then((response) => {
      const {
        data: {next_redirect_pc_url, tid}
      } = response;
      console.log(next_redirect_pc_url);
      console.log(tid);
      window.localStorage.setItem("tid",tid);
      window.localStorage.setItem("next_redirect_pc_url",next_redirect_pc_url);
    });
  }

  return (
    <>
      <Cafeinfo />
      <div className="mt-5 mb-5 text-center">
        <p className="text-2xl font-bold">주문 내역</p>
      </div>
      <div className="mx-auto mb-24 h-full w-full border lg:w-[700px] shadow-xl border-red-800 bg-red-800 text-white">
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
            <img src="src/components/order/featured/paymentList/img/kakaoSmall.jpg"/>
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
          <p className="text-lg text-white">총 결제금액 : {totalPrice}</p>
        </div>
        <div className="float-right mt-2 mr-3 inline-block rounded-3xl border p-2 text-white lg:mr-10">
          
          <button className="text-lg text-white" onClick={() =>kakaocall(productName,productCount,totalPrice)}>결제하기</button>
          
        </div>
      </div>
    </>
  )
}

export default payment
