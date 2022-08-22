// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Size = ({data,setSizeCoast,setRecomendCoast,count1}) => {

  const [size, setSize] = useState()
  const [selectsize, setSelectsize] = useState('8px')
  console.log(count1)
  const clickbtn = (e) => {
    setSize(e.target.value)
    if (e.target.value === data.size1) {
      setSelectsize('8px')
      setSizeCoast(0)
      if(count1 !== 0){
        console.log('확인')
        setRecomendCoast(0)
      }
    } else if (e.target.value === data.size2) {
      setSelectsize('80px')
      setSizeCoast(500)
      if(count1 !== 0){
        setRecomendCoast(500)
      }
    } else if (e.target.value === data.size3) {
      setSelectsize('152px')
      setSizeCoast(1000)
      if(count1 !== 0){
        setRecomendCoast(1000)
      }
    } else if (e.target.value === data.size4) {
      setSelectsize('224px')
      setSizeCoast(1500)
      if(count1 !== 0){

        setRecomendCoast(1500)
      }
    }
  }
  return (
    <div className="mt-5 mx-auto lg:mx-0 block max-w-[420px] flex-grow lg:mr-6 lg:ml-1">
    <h2 className="mb-5 text-[1.2rem] font-semibold md:text-[1.6rem]">
      <span className="relative block px-2 pb-3 after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:rounded-xl after:bg-[#d4e9e2]">
        Size options
      </span>
    </h2>
    <form className="mb-[3.2rem!important] block p-0 text-center">
      <fieldset>
        {
          data.size1 !== null &&
          <div className="relative m-0 my-3 inline-block h-[104px] w-[72px] px-0 text-left align-top">
          <div
            style={{ marginLeft: selectsize }}
            id="size"
            className="sizeBtn absolute z-[-1] h-[56px] w-[56px] rounded-[50%] border-[2px] border-[#006241] bg-[#d4e9e2] opacity-100 transition-all delay-[0] duration-300 ease-in-out"
          ></div>
          <label>
            <input
              className="absolute top-0 z-[-1] h-[104px] w-[72px] appearance-none"
              id="Regular"
              name="size"
              type="radio"
              value={data.size1}
              checked={size === data.size1}
              onChange={clickbtn}
            />
            <div className="mx-6 my-2 h-[40px] w-[24px] cursor-pointer bg-[url(https://www.starbucks.com/app-assets/76b8892b0db8f5d411988fe1bbbe4141.svg)] "></div>
            <p className="text-center text-base font-semibold">{data.size1}</p>
            <p className="text-center text-sm"> 12 fl oz</p>
          </label>
        </div>
        }

        {
          data.size2 !== null &&
          <div className="relative m-0 my-3 inline-block h-[104px] w-[72px] px-0 text-left align-top">
          <label>
            <input
              className="absolute top-0 z-[-1] h-[104px] w-[72px] appearance-none"
              id="Tall"
              name="size"
              type="radio"
              value={data.size2}
              checked={size === data.size2}
              onChange={clickbtn}
            />
            <div className="mx-6 my-2 h-[40px] w-[24px] cursor-pointer bg-[url(https://www.starbucks.com/app-assets/2920fb2a8c34d3ddb95ad262872526e9.svg)] "></div>
            <p className="text-center text-base font-semibold">
             {data.size2}
            </p>
            <p className="text-center text-sm"> 16 fl oz</p>
          </label>
        </div>
        }

        {
          data.size3 !== null &&
          <div className="relative m-0 my-3 inline-block h-[104px] w-[72px] px-0 text-left align-top">
          <label>
            <input
              className="absolute top-0 z-[-1] h-[104px] w-[72px] appearance-none"
              id="Grande"
              name="size"
              type="radio"
              value={data.size3}
              checked={size === data.size3}
              onChange={clickbtn}
            />
            <div className="mx-6 my-2 h-[40px] w-[24px] cursor-pointer bg-[url(https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec35e680d46d9a9.svg)]"></div>
            <p className="text-center text-base font-semibold">{data.size3}</p>
            <p className="text-center text-sm"> 24 fl oz</p>
          </label>
        </div>
        }
        {
          data.size4 !== null &&
          <div className="relative m-0 my-3 inline-block h-[104px] w-[72px] px-0 text-left align-top">
          <label>
            <input
              className="absolute top-0 z-[-1] h-[104px] w-[72px] appearance-none"
              id="Venti"
              name="size"
              type="radio"
              value={data.size4}
              checked={size === data.size4}
              onChange={clickbtn}
            />
            <div className="mx-6 my-2 h-[40px] w-[24px] cursor-pointer bg-[url(https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg)]"></div>
            <p className="text-center text-base font-semibold">
              {data.size4}
            </p>
            <p className="text-center text-sm"> 30 fl oz</p>
          </label>
        </div>
        }

      </fieldset>
    </form>           
  </div>
  );
};

export default Size;