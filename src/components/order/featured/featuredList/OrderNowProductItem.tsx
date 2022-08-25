// @ts-nocheck
import React, {FC, memo, useCallback, useEffect, useState} from 'react'
import Size from './Size';

interface OrderNowProductItemProps {
    key: string;
    style?: string;
    setSizePrice:number;
    setRecommendPrice:number;
    data: {
        product_id: any;
        eng: any;
        name_eng: string;
        name_kor: string;
        price: number;
        category: string;
    };
}

const OrderNowProductItem: FC<OrderNowProductItemProps> = ({
    key,
    data,
    style,
    setSizePrice,
    setRecommendedSizePrice,
    setRecommendedCount,
    setRecommendedPrice
}) => {
  const [count, setCount] = useState(0);
  
  const handleClickPlus = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
    setRecommendedCount((item) => item+1)
    setRecommendedPrice((item) => item+data.price)
}, []);

const handleClickMinus = useCallback(() => {
    setCount((prevCount) => prevCount > 1 ? prevCount - 1 : 0);
    setRecommendedCount((prevCount) => prevCount > 1 ? prevCount - 1 : 0);
    setRecommendedPrice((item) => item-data.price)
}, []);


  return (
    <div key={key}>
      <div className="mt-10 flex justify-center sm:gap-5 lg:flex-row lg:justify-start">
        <img
          className="top-0 mx-auto h-[130px] w-[130px] sm:mx-0 lg:rounded-full"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjFfMTk3%2FMDAxNjQ1NDIwMTQxNDcy.sLG1bvlwCxnepYWJAfxl-ThjVBdn9uyUv1ta3xcPiGkg.aaC0rjVctlb1Fu30NzxYxNrUBNv12j1lsZ32LyB4Anog.JPEG.jang2721%2FIMG_3650.jpg&type=sc960_832"
        />
        <div className="mx-auto sm:mx-0 lg:my-3">
          <div className="mx-auto text-xl font-bold lg:ml-5 lg:text-2xl">
            <p id="ProductName"> {data.eng == null ? data.name_eng : data.name_kor}</p>
          </div>
          <div id="totalPay" className="my-2 text-base text-gray-600 lg:ml-5">
            <p id="price" defaultValue={data.price}>
            ₩ {data.price}
           
            </p>
          </div>
          <button className="w-7 border border-black lg:ml-5" onClick={handleClickPlus}>
            +
          </button>
          <input
            id={data.product_id}
            className={`w-12 border-t border-b border-black text-center count ${style || ''}`}
            type="number"
            value={count}
            readOnly
          />
          <button className="w-7 border border-black" onClick={handleClickMinus}>
            -
          </button>
        </div>
      </div>
      <div className="lg:min-w-[288px]">
        {data?.category === 'Drinks' ? <Size data={data as any} setSizePrice={setSizePrice} setRecommendedSizePrice={setRecommendedSizePrice} item="100"/> : null}
      </div>
    </div>
  )
}


export default memo(OrderNowProductItem);