import { count } from 'console'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OrderNowProduct from './featuredList/OrderNowProduct'

import Size from './featuredList/Size'
const OrderNow = () => {
  const coffeePrice:number = 5000
  const [totalPay, setTotalPay]= useState(coffeePrice)
  
  return (
    <>
      <div className="flex flex-col gap-10 lg:flex-row ">
        <div className="h-full w-full bg-[#1f3933]">
          <div className="flex h-full flex-col justify-center lg:mr-[100px] lg:flex-row">
            <img
              className="my-5 mx-auto h-[200px] w-[50px] min-w-[200px] lg:my-auto lg:mx-[99px]"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc1%2Fd3%2F45%2Fc1d34538d187fe7c375d0a1407800194.jpg&type=sc960_832"
            />
            <div className="items-center font-extrabold text-white  lg:my-auto">
              <div className="mx-auto my-10 w-80 items-center justify-center text-center text-4xl  lg:w-[400px] lg:text-start">
                <p>DROP Coffee</p>
              </div>
              <div className="mx-auto mb-5 w-80 text-center font-semibold text-gray-400 lg:mx-0 lg:w-[450px] lg:text-2xl lg:font-normal">
                <span>
                  동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라
                  만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 lg:ml-[70px] xl:flex-row">
        <div className="my-10 mx-auto lg:mx-[150px]">
          <img
            className="w-[400px] lg:min-h-[500px] lg:min-w-[500px]"
            src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdnvefa72aowie.cloudfront.net%2Forigin%2Farticle%2F202207%2FBD21914A2E3300AF9A241AEF915AE6B47E21CE8AAB402DA1BF4E07BE51CA7BA7.jpg%3Fq%3D95%26s%3D1440x1440%26t%3Dinside&type=sc960_832"
          />
        <Size/>
          <div className="pb-14 my-10 w-[450px]">
              <div className="mx-auto w-[300px] text-center sm:w-full">
                <p>
                  남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리
                  기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이
                  보전하세
                </p>
              </div>
              <div className="mt-5">
                <div className="mx-auto flex items-center">
                  <svg className="mr-3 h-[24px] w-[24px] overflow-visible fill-current	text-gray-500">
                    <path d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z"></path>
                    <path d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z"></path>
                  </svg>
                  <p className="text-gray-500">
                    서울 특별시 중구 중구 중구 중구
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="ml-1 mr-3 w-4 "
                    src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2016/png/iconmonstr-instagram-11.png&r=138&g=138&b=138"
                  ></img>
                  <p className="text-gray-500">
                    https://www.instagram.com/yangwoongbee/
                  </p>
                </div>
              </div>
            </div>
        </div>

        <div className="mx-auto sm:mb-24 lg:ml-32 w-full lg:my-10 xl:mx-0">
          <h2 className="sm:w-[400px] mx-auto mb-5 w-[500px] text-[1.2rem] font-semibold md:text-[1.6rem] lg:mx-0">
            <span className="relative block px-2 pb-3  after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:rounded-xl after:bg-[#d4e9e2]">
              Recommend Menu
            </span>
          </h2>
          <OrderNowProduct coffeePrice={coffeePrice} totalPay={totalPay}/>
          <OrderNowProduct coffeePrice={coffeePrice} totalPay={totalPay}/>
        </div>
      </div>
      <div className="fixed bottom-0 h-[70px] w-full bg-[#1f3933]">
        <div className="my-5 ml-5 inline-block">
          <p className="text-xl text-white">total Pay :{totalPay}</p>
        </div>
        <div className="float-right mt-2 mr-10 inline-block rounded-3xl border p-3 text-white">
          <Link to="./payment">
          <button className="text-xl text-white">payment</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default OrderNow
