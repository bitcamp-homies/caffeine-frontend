// @ts-nocheck
import { count } from 'console'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import { listAllMybatis } from 'store/api'
import OrderNowProduct from './featuredList/OrderNowProduct'

import Size from './featuredList/Size'
const OrderNow = () => {
  const coffeePrice: number = 5000
  const [totalPay, setTotalPay] = useState(coffeePrice)
  const {cafe_Id} = useParams()
  const { data, isSuccess } = useQuery(
    'listAllMybatis',
    listAllMybatis,
  )

  const cafedata = data?.data.filter((item) => item.cafe_name === cafe_Id)
  return (
    <>
      <div className="flex flex-col gap-1 lg:ml-[70px] xl:flex-row">
        <div className="my-10 mx-auto lg:mx-[150px]">
          {isSuccess && <img
            className="w-[400px] lg:min-h-[500px] lg:min-w-[500px]"
            src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdnvefa72aowie.cloudfront.net%2Forigin%2Farticle%2F202207%2FBD21914A2E3300AF9A241AEF915AE6B47E21CE8AAB402DA1BF4E07BE51CA7BA7.jpg%3Fq%3D95%26s%3D1440x1440%26t%3Dinside&type=sc960_832"
          />}
          <div className='flex flex-row w-full lg:w-[500px] lg:max-w-[500px] mt-2'>
            <p className='font-bold text-xl lg:text-2xl w-[90%]'>Cafe Americano</p>
            <p className='font-bold text-xl lg:text-2xl mr-2'>{coffeePrice}₩</p>
          </div>
          <Size />
          
        </div>
        <div></div>
        <div className="mx-auto w-full sm:mb-24 lg:my-10 lg:ml-32 xl:mx-0">
          <h2 className="mx-auto mb-5 text-[1.2rem] font-semibold sm:w-[400px] md:text-[1.6rem] lg:mx-0">
            <span className="relative block px-2 pb-3  after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:rounded-xl after:bg-[#d4e9e2]">
              Recommend Menu
            </span>
          </h2>
          <OrderNowProduct coffeePrice={coffeePrice} totalPay={totalPay} />
          <OrderNowProduct coffeePrice={coffeePrice} totalPay={totalPay} />
        </div>
      </div>
      <div className="fixed bottom-0 h-[70px] w-full bg-red-800">
        <div className="my-5 ml-5 inline-block">
          <button className="text-xl font-bold text-white">Price : {totalPay}</button>
        </div>
        <div className="float-right mt-2 lg:mr-10 mr-3 inline-block rounded-3xl border p-3 text-white">
          <Link to="./payment">
            <button className="text-xl text-white">Next</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default OrderNow
