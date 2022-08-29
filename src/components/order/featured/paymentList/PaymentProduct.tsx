// @ts-nocheck
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getCafeitemList } from 'store/api'

const PaymentProduct = ({ cafe_id, product_id }) => {
  //api 사용해서 카페제품들 불러오기
  const {
    data: productdata,
    isSuccess,
    isError,
    isLoading,
  } = useQuery(['getCafeitemList', cafe_id], () => getCafeitemList(cafe_id))
  //추가 메뉴
  const name = []
  const price = []
  const count = []
  const size = []
  const sizePrice = []

  //추천메뉴 세션값 가져오기
  productdata?.data.map((item, index) => {
    name[index] = sessionStorage.getItem(
      `recomendedProductName${item.product_name_kor}`,
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
  
  //메인상품 세션값
  const mainProductSize = sessionStorage.getItem('mainProductSize')
  const mainProductSizePrice = sessionStorage.getItem('mainProductSizePrice')
  const mainProductCount = sessionStorage.getItem('mainProductCount')
  //메인상품 리스트
  const mainProductList = productdata?.data.find(
    (item) => item.product_id == product_id,
  )
  return (
    <>
      <div className="border-b border-black">
        <div className="mt-5 text-center">
          <span className="text-2xl font-bold">주문 상품</span>
        </div>
        <div className="ml-3 flex gap-10">
          <div>
            {isSuccess && (
              <img
                className="my-5 ml-5 h-[150px] w-[150px]"
                src={`https://storage.googleapis.com/bitcamp-caffeine.appspot.com${mainProductList.file_path}${mainProductList.img_file}`}
              />
            )}
          </div>
          <div className="my-auto flex flex-col">
            <span className="mr-2 text-xs font-bold lg:mr-0 lg:text-base">
              제품명 : {isSuccess && mainProductList.product_name_kor}
            </span>
            <span className="text-xs font-bold lg:text-base">
              사이즈 :{' '}
              {isSuccess && mainProductList.category == 'Food'
                ? 'OneSize'
                : isSuccess && mainProductList.category == 'Drinks'
                ? 'Short'
                : mainProductSize}
            </span>
            <span className="text-xs font-bold lg:text-base">
              선택 수량 : {mainProductCount}
            </span>
            <span className="text-xs font-bold lg:text-base">
              금액 :
              {isSuccess &&
                Number(mainProductList.price) + Number(mainProductSizePrice)}
            </span>
          </div>
        </div>
      
        {productdata?.data.map((item, index) => (
          <div key={item.product_id}>
            {name[index] == null ? null : (
              <div>
                <div className="ml-3 flex gap-10">
                  <div>
                    {isSuccess && (
                      <img
                        className="my-5 ml-5 h-[150px] w-[150px]"
                        src={`https://storage.googleapis.com/bitcamp-caffeine.appspot.com${item.file_path}${item.img_file}`}
                      />
                    )}
                  </div>
                  <div className="my-auto flex flex-col">
                    <span className="mr-2 text-xs font-bold lg:mr-0 lg:text-base">
                      {item.product_name_kor}
                    </span>
                    <span className="text-xs font-bold lg:text-base">
                      사이즈 : {size[index] == null ? 'OneSize' : size[index]}
                    </span>
                    <span className="text-xs font-bold lg:text-base">
                      선택 수량 : {count[index]}
                    </span>
                    <span className="text-xs font-bold lg:text-base">
                      금액 :
                      {sizePrice[index] == null
                        ? price[index] * count[index]
                        : Number(sizePrice[index]) +
                          Number(price[index]) * Number(count[index])}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default PaymentProduct
