// @ts-nocheck
import axios from 'axios'
import { count } from 'console'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import Cafeinfo from './featuredList/Cafeinfo'
import OrderNowProduct from './featuredList/OrderNowProduct'
import { getCafeProductList } from 'store/api'

import Size from './featuredList/Size'
const OrderNow = () => {
  const { cafe_id, product_id } = useParams()
  const [data, setData] = useState([])
  const [price, setPrice] = useState(0)
  const [sizeCoast, setSizeCoast] = useState(0);
  const[test,setest] = useState(0)
  const[test1,settest1] = useState([])
    const {data : productdata,isSuccess,isError,isLoading} = useQuery(
      ['getCafeProductList',cafe_id],
      () => getCafeProductList(cafe_id),
    ) 

      useEffect(()=>{
        setPrice(4000)
      },[price])
      
  const data1 = productdata?.data.find((item)=> item.product_id == product_id)
  return (
    <>
      <Cafeinfo />
      <div className="flex flex-col gap-1 lg:ml-[70px] xl:flex-row">
        <div className="my-10 mx-auto lg:mx-[150px]">
          <img
            className="w-[400px] lg:min-h-[500px] lg:min-w-[500px]"
            src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdnvefa72aowie.cloudfront.net%2Forigin%2Farticle%2F202207%2FBD21914A2E3300AF9A241AEF915AE6B47E21CE8AAB402DA1BF4E07BE51CA7BA7.jpg%3Fq%3D95%26s%3D1440x1440%26t%3Dinside&type=sc960_832"
          />
          <div className="mt-2 flex w-full flex-row lg:w-[500px] lg:max-w-[500px]">
            <p className="w-[90%] text-xl font-bold lg:text-2xl">
              Cafe Americano
            </p>
            <p className="mr-2 text-xl font-bold lg:text-2xl">1₩</p>
          </div>

        {isSuccess && <Size data={data1} setSizeCoast={setSizeCoast} /> }

        </div>
        <div></div>
        <div className="mx-auto w-full sm:mb-24 lg:my-10 lg:ml-32 xl:mx-0">
          <h2 className="mx-auto mb-5 text-[1.2rem] font-semibold sm:w-[400px] md:text-[1.6rem] lg:mx-0">
            <span className="relative block px-2 pb-3  after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:rounded-xl after:bg-[#d4e9e2]">
              Recommend Menu
            </span>
          </h2>
          {isSuccess && <OrderNowProduct data={productdata} setSizeCoast={setSizeCoast} setest={setest} test={test} settest1={settest1} test1={test1}/>}
        </div>
      </div>
      <div className="fixed bottom-0 h-[70px] w-full bg-red-800">
        <div className="my-5 ml-5 inline-block">
          <button className="text-xl font-bold text-white">
            {
              isSuccess && data1.price + price + sizeCoast + test1
            }
          </button>

        </div>
        <div className="float-right mt-2 mr-3 inline-block rounded-3xl border p-3 text-white lg:mr-10">
          <Link to="./payment/23000">
            <button className="text-xl text-white">Next</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default OrderNow