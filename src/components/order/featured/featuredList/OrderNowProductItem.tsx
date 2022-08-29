// @ts-nocheck
import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import Size from './Size'

const OrderNowProductItem: FC<OrderNowProductItemProps> = ({
  key,
  data,
  style,
  setSizePrice,
  setRecommendedSizePrice,
  setRecommendedCount,
  setRecommendedPrice,
}) => {
  const [count, setCount] = useState(0)
  //Plus 핸들러
  const handleClickPlus = () => {
    setCount((prevCount) => prevCount + 1)
    setRecommendedCount((item) => item + 1)
    setRecommendedPrice((item) => Number(item) + Number(data.price))
  }
  //세션 스토리지에 값 넣기
  useEffect(() => {
    count > 0
      ? sessionStorage.setItem(
          `recomendedProductName${data.product_name_kor}`,
          data.product_name_kor,
        )
      : sessionStorage.removeItem('recomendedProductName')
    count > 0
      ? sessionStorage.setItem(`recomendedCount${data.product_name_kor}`, count)
      : sessionStorage.removeItem('recomendedCount')
    count > 0
      ? sessionStorage.setItem(
          `recomendedProductPrice${data.product_name_kor}`,
          data.price,
        )
      : sessionStorage.removeItem('recomendedProductPrice')
  }, [count])

  const handleClickMinus = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 0))
    setRecommendedCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 0))
    setRecommendedPrice((item) => (count > 0 ? item - data.price : 0))
  }

  return (
    <div key={key}>
      <div className="mt-10 flex sm:gap-5 gap-3 lg:flex-row justify-start">
        <img
          className="top-0 h-[130px] w-[130px] sm:mx-0 lg:rounded-full"
          src={`https://storage.googleapis.com/bitcamp-caffeine.appspot.com${data.file_path}${data.img_file}`}
        />
        <div className="sm:mx-0 lg:my-3">
          <div className="mx-auto text-xl font-bold lg:ml-5 lg:text-2xl">
            <p id="ProductName">
              {data.product_name_eng}
            </p>
          </div>
          <div id="totalPay" className="my-2 text-base text-gray-600 lg:ml-5">
            <p id="price" defaultValue={data.price}>
              ₩ {data.price}
            </p>
          </div>
          <button
            className="w-7 border border-black lg:ml-5"
            onClick={handleClickPlus}
          >
            +
          </button>
          <input
            id={data.product_id}
            className={`count w-12 border-t border-b border-black text-center ${
              style || ''
            }`}
            type="number"
            value={count}
            readOnly
          />
          <button
            className="w-7 border border-black"
            onClick={handleClickMinus}
          >
            -
          </button>
        </div>
      </div>
      <div className="lg:min-w-[288px]">
        {data?.category === 'Drinks' ? (
          <Size
            data={data as any}
            setSizePrice={setSizePrice}
            setRecommendedSizePrice={setRecommendedSizePrice}
            item="100"
          />
        ) : null}
      </div>
    </div>
  )
}

export default memo(OrderNowProductItem)