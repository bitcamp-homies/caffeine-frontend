// @ts-nocheck
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getCafesMenusAll } from 'store/api'

const PaymentProduct = ({ cafe_id, product_id }) => {
  //api 사용해서 카페제품들 불러오기
  const {
    data: productdata,
    isSuccess,
    isError,
    isLoading,
  } = useQuery(['getCafeProductList', cafe_id], () => getCafesMenusAll(cafe_id))
  //추가 메뉴
  const name = []
  const price = []
  const count = []
  const size = []
  const sizePrice = []

  //추천메뉴 세션값 삽입 
  productdata?.data.map((item, index) => {
    name[index] = sessionStorage.getItem(
      `recomendedProductName${item.name_kor}`,
    )
    price[index] = sessionStorage.getItem(
      `recomendedProductPrice${item.name_kor}`,
    )
    count[index] = sessionStorage.getItem(`recomendedCount${item.name_kor}`)
    size[index] = sessionStorage.getItem(`recommendedSize${item.name_kor}`)
    sizePrice[index] = sessionStorage.getItem(
      `recommendedSizePrice${item.name_kor}`,
    )
  })

  //메인상품 세션값
  const mainProductSize = sessionStorage.getItem("mainProductSize");
  const mainProductSizePrice = sessionStorage.getItem("mainProductSizePrice");
  const mainProductCount = sessionStorage.getItem("mainProductCount");
  //메인상품 리스트
  const data1 = productdata?.data.find((item)=> item.product_id == product_id)

  return (
    <>
      <div className="border">
        <div className='text-center'>
          <span className='text-2xl font-bold'>추가 주문 내용</span>
        </div>
        <div className="flex justify-center gap-10 lg:gap-20">
          <div>
            <img
              className="my-5 ml-5 h-[150px] w-[150px]"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc1%2Fd3%2F45%2Fc1d34538d187fe7c375d0a1407800194.jpg&type=sc960_832"
            />
          </div>
          <div className="my-auto flex flex-col">
            <span className="mr-2 text-xs font-bold lg:mr-0 lg:text-base"></span>
            <span className="text-xs font-bold lg:text-base">사이즈 : {mainProductSize}</span>
            <span className="text-xs font-bold lg:text-base">선택 수량 : {mainProductCount}</span>
            <span className="text-xs font-bold lg:text-base">금액 : {isSuccess && data1.price + Number(mainProductSizePrice)}</span>
          </div>
        </div>
      </div>

      {productdata?.data.map((item, index) => (
        <div key={item.product_id}>
          {name[index] == null ? null : (
            <div>
              <div className="flex flex-row justify-center gap-10 lg:gap-20">
                <div>
                  <img
                    className="my-5 ml-5 h-[150px] w-[150px]"
                    src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc1%2Fd3%2F45%2Fc1d34538d187fe7c375d0a1407800194.jpg&type=sc960_832"
                  />
                </div>
                <div className="my-auto flex flex-col">
                  <span className="mr-2 text-xs font-bold lg:mr-0 lg:text-base">
                    {item.name_kor}
                  </span>
                  <span className="text-xs font-bold lg:text-base">
                    사이즈 : {size[index] == null ? 'OneSize' : size[index]}
                  </span>
                  <span className="text-xs font-bold lg:text-base">
                    선택 수량 : {count[index]}
                  </span>
                  <span className="text-xs font-bold lg:text-base">
                    금액 :{' '}
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
    </>
  )
}

export default PaymentProduct
