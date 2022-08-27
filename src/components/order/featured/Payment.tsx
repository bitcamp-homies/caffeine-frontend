// @ts-nocheck
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ReactComponentElement } from 'react'
import { Link, useParams } from 'react-router-dom'
import { kakaoAPI } from 'store/api'
import Cafeinfo from './featuredList/Cafeinfo'
import PaymentProduct from './paymentList/PaymentProduct'

const payment = () => {
  const MY_ADMIN_KEY = 'cd251696592fb923e36df2bf69696745'
  const productCount = 1
  const productName = '몰라'
  const [paymentOption, setPaymentOption] = useState('1')
  const { totalPrice, cafe_id, product_id } = useParams()
  const paymentOptionHandler = (e) => {
    setPaymentOption(e.target.value)
  }

  const [next_redirect_pc_url, setNext_redirect_pr_url] = useState('')
  const [tid, setTid] = useState('')
  console.log(next_redirect_pc_url)
  const kakaoUrl = next_redirect_pc_url.next_redirect_pc_url;
  console.log(kakaoUrl)
  useEffect(() => {
    axios({
      url: '/v1/payment/ready',
      method: 'POST',
      headers: {
        Authorization: 'KakaoAK de0e3076b485b703b1f1a4a2419440e6',
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      params: {
        cid: 'TC0ONETIME',
        partner_order_id: 'partner_order_id',
        partner_user_id: 'partner_user_id',
        item_name: '초코파이',
        quantity: 1,
        total_amount: 2200,
        vat_amount: 200,
        tax_free_amount: 0,
        // router에 지정한 PayResult의 경로로 수정
        approval_url: `http://localhost:3000/order/featured/order-now/cafe/${cafe_id}/product/${product_id}/payment/${totalPrice}/paymentcomplete`,
        fail_url: 'http://localhost:3000/payresult',
        cancel_url: 'http://localhost:3000/payresult',
      },
    }).then((response) => {
      const {
        data: { next_redirect_pc_url, tid },
      } = response

      console.log(next_redirect_pc_url)
      console.log(tid)
      // localstorage에 tid 저장
      window.localStorage.setItem('tid', tid)
      setNext_redirect_pr_url({ next_redirect_pc_url })
    })
  },[])
  return (
    <>
      <Cafeinfo />
      <div className="mt-5 mb-5 text-center">
        <p className="text-2xl font-bold">주문 내역</p>
      </div>
      <div className="mx-auto mb-24 h-full w-full border border-red-800 bg-red-800 text-white shadow-xl lg:w-[700px]">
        <PaymentProduct cafe_id={cafe_id} product_id={product_id} />

        <div className="flex flex-col border-t p-5">
          <p className="text-xl font-bold">결제 수단</p>
          <label>
            <input
              type="radio"
              checked={paymentOption === '1'}
              onChange={paymentOptionHandler}
              value="1"
            />
            <img src="src/components/order/featured/paymentList/img/kakaoSmall.jpg" />
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
            <span className="ml-3 text-sm text-gray-400">
              포인트 결제시 ?% 할인혜택
            </span>
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
              <button className="text-lg text-white" onClick={() => window.open(`${kakaoUrl}`,"카카오페이" ,"width=800, height=700")}>결제하기</button>
        </div>
      </div>
    </>
  )
}

export default payment
