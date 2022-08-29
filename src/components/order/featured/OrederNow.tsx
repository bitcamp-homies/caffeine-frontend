// @ts-nocheck
import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useLocation, useParams } from 'react-router-dom'
import Cafeinfo from './featuredList/Cafeinfo'
import OrderNowProduct from './featuredList/OrderNowProduct'
import { getCafeitemList } from 'store/api'
import style from './featuredList/FeaturedStyle.module.css'
import Size from './featuredList/Size'
import { main } from '@popperjs/core'

const OrderNow = () => {
  const { cafe_id, product_id } = useParams()
  const [mainProductCount, setMainProductCount] = useState(1) //메인제품 카운트
  const [mainProductSize, setMainProductSize] = useState("") //메인제품 사이즈
  const [sizePrice, setSizePrice] = useState(0) //메인제품 사이즈 가격
  const [recommendedPrice, setRecommendedPrice] = useState(0) //추천메뉴의 가격
  const [recommendedSizePrice, setRecommendedSizePrice] = useState(0) //추천메뉴 사이즈 가격
  const [recommendedCount, setRecommendedCount] = useState(0) //추천메뉴 카운트
  const location = useLocation(); //State값 받기
  const id = location.state?.id;
  const userType = location.state?.userType;
  const nickName = location.state?.nickName;
  const user_id = location.state?.user_id;
  
  //api 호출 후 해당카페의 제품들 전부 불러오기
  const {
    data: productdata,
    isSuccess,
    isError,
    isLoading,
  } = useQuery(['getCafeitemList', cafe_id], () => getCafeitemList(cafe_id))

  //유저가 선택한 제품 찾기(메인 제품
  const mainProduct = productdata?.data.find(
    (item) => item.product_id == product_id,
  )
  
  //추천메뉴들의 총 가격
  let recommendedPrices =
    Number(recommendedPrice) +
    Number(recommendedSizePrice) * Number(recommendedCount)
  //총가격 표시
  let productTotalPrice
  if (isSuccess) {
    productTotalPrice =
      (Number(mainProduct.price) + Number(sizePrice)) *
        Number(mainProductCount) +
      Number(recommendedPrices)
  }

  //Link에 넘겨줘야할 값( 잠시 보류 )
  /*
  
  메인제품
  1. 메인제품 사이즈 mainProductSize
  3. 메인제품 수량 mainProductCount

  추천메뉴
  1. 추천메뉴 가격
  2. 추천메뉴 사이즈
  4. 추천메뉴 수량
  5. 추천메뉴 제품명

  total
  1. 총합 가격
  

  */
  
  //메인제품 카운트 핸들러
  const countPlus = useCallback => {
    setMainProductCount((PrevCount) => PrevCount + 1)
    sessionStorage.setItem('mainProductCount', mainProductCount+1)
  }

  const countMinus = useCallback => {
    setMainProductCount((PrevCount) => (PrevCount > 1 ? PrevCount - 1 : 1))
    sessionStorage.setItem('mainProductCount', mainProductCount)
  }

  //세션스토리지에 값이 남아있을수 있기떄문에 제품 정보들 삭제하기
  useEffect(() => {
    sessionStorage.clear()
    sessionStorage.setItem('mainProductSizePrice', sizePrice)
    sessionStorage.setItem('mainProductCount', mainProductCount)
    {isSuccess && mainProduct.category == 'Drinks' ? sessionStorage.setItem('mainProductSize', 'Short') : sessionStorage.setItem('mainProductSize', 'OneSize')}
    sessionStorage.setItem('Id', id);
    sessionStorage.setItem('NickName',nickName);
    sessionStorage.setItem('UserType',userType);
    sessionStorage.setItem('User_id', user_id);
  }, [])
  return (
    <>
      <Cafeinfo />
      <div className="flex flex-col gap-1 lg:ml-[70px] xl:flex-row">
        <div className="my-10 mx-auto lg:mx-[150px]">
          {isSuccess && (
            <img
              className="w-[400px] lg:min-h-[500px] lg:min-w-[500px]"
              src={`https://storage.cloud.google.com/bitcamp-caffeine.appspot.com${mainProduct.file_path}${mainProduct.img_file}`}
            />
          )}
          {/* 고객이 선택한 제품 표시 */}
          <div className="mt-2 flex w-full flex-row lg:w-[500px] lg:max-w-[500px]">
            <p className="w-[90%] text-xl font-bold lg:text-2xl">
              {isSuccess && mainProduct.product_name_kor}
            </p>
            <p className="mr-2 text-xl font-bold lg:text-2xl">
              {isSuccess && mainProduct.price}₩
            </p>
          </div>
          <div className="mt-4 w-full lg:w-[500px] lg:max-w-[500px]">
            <span className="text-xl font-bold lg:text-2xl">수량 선택</span>
            <div className="float-right">
              <button
                className="w-7 border border-black lg:ml-5"
                onClick={countPlus}
              >
                +
              </button>
              <input
                className={`count w-12 border-t border-b border-black text-center ${style}`}
                type="number"
                value={mainProductCount}
                readOnly
              />
              <button className="w-7 border border-black" onClick={countMinus}>
                -
              </button>
            </div>
          </div>

          {isSuccess && mainProduct.category !== 'Food' && (
            <Size data={mainProduct} mainProductSize={mainProductSize} setSizePrice={setSizePrice} />
          )}
        </div>

        <div className="lg:w-90 mx-auto sm:mb-24 lg:my-10 lg:ml-32 xl:mx-0">
          <h2 className="mx-auto mb-5 text-[1.2rem] font-semibold sm:w-[400px] md:text-[1.6rem] lg:mx-0">
            <span className="relative block px-2 pb-3  after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:rounded-xl after:bg-[#d4e9e2]">
              추천 메뉴
            </span>
          </h2>
          <div className='mb-28'>
            {isSuccess && (
              <OrderNowProduct
                data={productdata}
                recommendedPrice={recommendedPrice} //추천메뉴 가격
                setSizePrice={setSizePrice} // 메인메뉴 사이즈 가격
                setRecommendedSizePrice={setRecommendedSizePrice} //추천메뉴 사이즈가격
                setRecommendedCount={setRecommendedCount} // 추천메뉴 갯수
                setRecommendedPrice={setRecommendedPrice} // 추천메뉴 가격
                mainProduct={mainProduct} // 메인제품 정보
              />
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 h-[70px] w-full bg-red-800">
        <div className="my-5 ml-5 inline-block">
          <p className="text-xl font-bold text-white">
            {isSuccess && productTotalPrice}
          </p>
        </div>
        <div className="float-right mt-2 mr-3 inline-block rounded-3xl border p-3 text-white lg:mr-10">
          <Link
            to={`/order/featured/order-now/cafe/${cafe_id}/product/${product_id}/payment/`} state={{ productTotalPrice : productTotalPrice, mainProductName : isSuccess && mainProduct.product_name_kor}}>
            <button className="text-xl text-white">Next</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default OrderNow
