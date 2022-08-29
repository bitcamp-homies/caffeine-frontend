// @ts-nocheck
import axios from 'axios'
import { check } from 'prettier'
import React, { useEffect, useState } from 'react'
import { ReactComponentElement } from 'react'
import { useQuery } from 'react-query'
import { Link, useLocation, useParams } from 'react-router-dom'
import { kakaoAPI, listAllMybatis } from 'store/api'
import Cafeinfo from './featuredList/Cafeinfo'
import PaymentProduct from './paymentList/PaymentProduct'

const payment = () => {
  //카카오 API키
  const MY_ADMIN_KEY = 'cd251696592fb923e36df2bf69696745'
  const [paymentOption, setPaymentOption] = useState('1')
  const { cafe_id, product_id } = useParams()
  const [checkProduct, setCheckProduct] = useState("0")
  const [checkRefund, setCheckRefund] = useState("0");
  const [checkAll, setCheckAll] = useState("0");
  const location = useLocation();
  const totalPrice = location.state?.productTotalPrice;
  const mainProductName = location.state?.mainProduct;
  const paymentOptionHandler = (e) => {
    setPaymentOption(e.target.value)
  }
  
  const { data, isSuccess } = useQuery('listAllMybatis', listAllMybatis)
  const cafedata = data?.data.filter((item) => item.cafe_id == cafe_id)
  const cafe_name = isSuccess && cafedata[0].cafe_name;
  
  //첫번째 동의 여부
  const checkProductHandler = (e) => {
    if(checkProduct == 1){
      setCheckProduct(0)
    } else {
      setCheckProduct(1)
    }
  }
  
  //두번째 동의 여부
  const checkRefundHandler = (e) => {
    console.log(checkRefund);
    if(checkRefund == 1){
      setCheckRefund(0)
    } else {
      setCheckRefund(1)
    }
  }
  //세번째 동의 여부
  const checkAllHandler = (e) => {
    if(checkAll == 1){
      setCheckAll(0)
    } else {
      setCheckAll(1)
    }
  }

  //결제하기 버튼 동작
  const disabledCheck = (e) => {
    if(checkProduct != 1 && checkRefund != 1 && checkAll != 1){
      alert("동의 버튼을 눌러주세요");
      e.preventDefault()
    }
  }
  
  //카카오 API
  const [kakaoState, setKakaoState] = useState('')
  const kakaoUrl = kakaoState.next_redirect_pc_url
  useEffect(() => {
    axios({
      url: '/v1/payment/ready',
      method: 'POST',
      headers: {
        Authorization: `KakaoAK ${MY_ADMIN_KEY}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      params: {
        cid: 'TC0ONETIME',
        partner_order_id: 'partner_order_id',
        partner_user_id: 'partner_user_id',
        item_name: cafe_name,
        quantity: 1,
        total_amount: totalPrice,
        vat_amount: 200,
        tax_free_amount: 0,
        // router에 지정한 PayResult의 경로로 수정
        approval_url: `http://localhost:3000/order/featured/order-now/cafe/${cafe_id}/product/${product_id}/payment/kakaoresult`,
        fail_url: 'http://localhost:3000/',
        cancel_url: 'http://localhost:3000/',
      },
    }).then((response) => {
      const {
        data: { next_redirect_pc_url, tid },
      } = response
      // localstorage에 tid 저장
      window.localStorage.setItem('tid', tid)
      setKakaoState({ next_redirect_pc_url })
    })
  }, [])
  console.log(kakaoUrl)
  function callKakao() {
    sessionStorage.setItem("totalPrice", totalPrice);
    window.open(`${kakaoUrl}`, '카카오페이', 'width=800, height=700')
    
  }
  return (
    <>
      <Cafeinfo />
      <div className="mt-5 mb-5 text-center">
        <p className="text-2xl font-bold">주문 내역</p>
      </div>
      <div className="mx-auto mb-24 h-full w-full border shadow-xl lg:w-[700px]">
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
            <span className="ml-3 text-sm text-gray-400">
              포인트 결제시 1% 할인혜택
            </span>
          </label>
        </div>
        {paymentOption === '2' ? (
          <div className="border-t">
            <p className="my-4 text-center text-2xl font-bold">구매 동의</p>
            <div className="lg:mx-4">
              <div className="border-t">
                <div className="mx-2 my-3 flex flex-row">
                  <div className="w-[90%]">
                    <p className="text-sm font-bold">
                      구매하려는 상품이 맞습니다.
                    </p>
                    <p className="mt-1 text-xs text-gray-300 lg:text-sm mr-2">
                      구매주소, 상품 이미지, 상품명, 사이즈등 중요 요소들을 한번 더 확인 했습니다.
                    </p>
                  </div>
                  <input className="w-5" type="checkbox" value="1" id="checkProduct" onClick={checkProductHandler}/>
                </div>
              </div>
            </div>
            <div className='lg:mx-4'>
            <div className="border-t">
              <div className="mx-2 my-3 flex flex-row">
                <div className="w-[90%]">
                  <p className="text-sm font-bold">
                    주문 후 환불 및 취소는 불가능 합니다.
                  </p>
                  <p className="mt-1 text-xs text-gray-300 lg:text-sm mr-2">
                    주문 즉시 음료 및 음식 제작이 시작되어 환불 및 취소는 불가능
                    합니다.
                  </p>
                </div>
                <input className="w-5" type="checkbox" id="checkRefund" value="1" onClick={checkRefundHandler} />
              </div>
            </div>
              <div className="border-t">
                <div className="mx-2 my-3 flex flex-row">
                  <div className="w-[90%]">
                    <p className="text-sm font-bold mr-2">
                      위 이용정책을 모두 확인하였으며 구매를 확정합니다.
                    </p>
                    <p className="mt-1 text-xs text-gray-300 lg:text-sm mr-2">
                    주문 음료의 정보들과 환불 및 취소 불가능 내용을 마지막으로 한번더 확인했습니다.
                    </p>
                  </div>
                  <input className="w-5" type="checkbox" id="checkAll" value="1" onClick={checkAllHandler} />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="fixed bottom-0 h-[70px] w-full bg-red-800">
        <div className="my-5 ml-5 inline-block">
          <p className="text-lg text-white">총 결제금액 : {totalPrice}</p>
        </div>
        <div className="float-right mt-2 mr-3 inline-block rounded-3xl border p-2 text-white lg:mr-10">
          {paymentOption === '1' ? (
            <button
              className="text-lg text-white" 
              onClick={callKakao} >
              결제하기
            </button>
          ) : (
            <Link to="./paymenting/1" state={{ totalPrice : totalPrice}}>
              <button className="text-lg text-white" id="payment" onClick={disabledCheck}>결제하기</button>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default payment
