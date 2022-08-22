// @ts-nocheck
import React, { useCallback, useEffect, useState } from 'react';
import Size from './Size';

const OrderNowProductitem = ({item,style,setSizeCoast,setCount1,setRecomendCoast,count1}) => {
    const [count,setCount] = useState(0)
    const useprice = item.price
    const handleClickPlus = useCallback(() => {
        setCount((item) => item + 1)
    },[])

    useEffect(() => {
        setCount1(count*item.price)
    },[count])

    const handleClickMinus = useCallback(() => {
        setCount((item) => item > 1 ? item - 1 : 0)
        setCount1((item) => item > 1 ? item - 1 : 0)
    },[])
    return (
<div key={item.product_id} >
      <div className="lfex mt-10 flex justify-center sm:gap-5 lg:flex-row lg:justify-start">
        <img
          className="top-0 mx-auto h-[130px] w-[130px] sm:mx-0 lg:rounded-full"
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjFfMTk3%2FMDAxNjQ1NDIwMTQxNDcy.sLG1bvlwCxnepYWJAfxl-ThjVBdn9uyUv1ta3xcPiGkg.aaC0rjVctlb1Fu30NzxYxNrUBNv12j1lsZ32LyB4Anog.JPEG.jang2721%2FIMG_3650.jpg&type=sc960_832"
        ></img>
        <div className="mx-auto sm:mx-0 lg:my-3">
          <div className="mx-auto text-xl font-bold lg:ml-5 lg:text-2xl">
            <p id="ProductName"> {item.eng == null ? item.name_eng : item.name_kor}</p>
          </div>
          <div id="totalPay" className="my-2 text-base text-gray-600 lg:ml-5">
            <p id="price" defaultValue={item.price}>
                ₩{item.price}
            </p>
          </div>
          <button id={item.product_id} className="w-7 border border-black lg:ml-5" onClick={handleClickPlus}>
            +
          </button>
          <input
            id={item.product_id}
            className={`w-12 border-t border-b border-black text-center ${style}`}
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
       {item.category === 'Drinks' ? <Size data={item} setSizeCoast={setSizeCoast} key={item.product_id} setRecomendCoast={setRecomendCoast} count1={count1} /> : null} 
      </div> 

    </div>
    );
};

export default OrderNowProductitem;