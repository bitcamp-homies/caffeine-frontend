// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Size = ({data,setSizePrice,item,setRecommendedSizePrice}) => {
  const [size, setSize] = useState()
  const [selectsize, setSelectsize] = useState('8px')
  const [recommendedSizeCoast, setRecommendedSizeCoast] = useState(0);
  const [mainProductSizeCoast, setMainProductSizeCoast] = useState(0);
  const [recommendedSize, setRecommendedSize] = useState('');
  const [mainProductSize, setMainProductSize] = useState('');

  useEffect(()=>{
    if(item == '100'){
      sessionStorage.setItem(`recommendedSizePrice${data.product_name_kor}`, recommendedSizeCoast);
      sessionStorage.setItem(`recommendedSize${data.product_name_kor}`, recommendedSize);
    } else{
      sessionStorage.setItem("mainProductSizePrice", mainProductSizeCoast);
      sessionStorage.setItem("mainProductSize", mainProductSize);
    }
  },[selectsize])



  const clickbtn = (e) => {
    setSize(e.target.value)
    if (e.target.value === 'Short') {
      setSelectsize('8px')
      if(item == '100'){
        setRecommendedSizePrice(0);
        setRecommendedSizeCoast(0);
        setRecommendedSize('Short');
      }else{
        setSizePrice(0);
        setMainProductSizeCoast(0);
        setMainProductSize('Short');
      }
    } else if (e.target.value === 'Tall') {
      setSelectsize('80px')
      if(item == '100'){
        setRecommendedSizePrice(500);
        setRecommendedSizeCoast(500);
        setRecommendedSize('Tall');
      }else{
        setSizePrice(500);
        setMainProductSizeCoast(500);
        setMainProductSize('Tall');
      }
    } else if (e.target.value === 'Grande') {
      setSelectsize('152px')
      if(item == '100'){
        setRecommendedSizePrice(1000);
        setRecommendedSizeCoast(1000);
        setRecommendedSize('Grande');
      }else{
        setSizePrice(1000);
        setMainProductSizeCoast(1000);
        setMainProductSize('Grande');
      }
    } else if (e.target.value === 'Venti') {
      setSelectsize('224px')
      if(item == '100'){
        setRecommendedSizePrice(1500);
        setRecommendedSizeCoast(1500);
        setRecommendedSize('Venti');
      }else{
        setSizePrice(1500);
        setMainProductSizeCoast(1500);
        setMainProductSize('Venti');
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
              value='Short'
              checked={size === 'Short'}
              onChange={clickbtn}
            />
            <div className="mx-6 my-2 h-[40px] w-[24px] cursor-pointer bg-[url(https://www.starbucks.com/app-assets/76b8892b0db8f5d411988fe1bbbe4141.svg)] "></div>
            <p className="text-center text-base font-semibold">Short</p>
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
              value='Tall'
              checked={size === 'Tall'}
              onChange={clickbtn}
            />
            <div className="mx-6 my-2 h-[40px] w-[24px] cursor-pointer bg-[url(https://www.starbucks.com/app-assets/2920fb2a8c34d3ddb95ad262872526e9.svg)] "></div>
            <p className="text-center text-base font-semibold">
             Tall
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
              value='Grande'
              checked={size === 'Grande'}
              onChange={clickbtn}
            />
            <div className="mx-6 my-2 h-[40px] w-[24px] cursor-pointer bg-[url(https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec35e680d46d9a9.svg)]"></div>
            <p className="text-center text-base font-semibold">Grande</p>
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
              value='Venti'
              checked={size === 'Venti'}
              onChange={clickbtn}
            />
         <div className="mx-6 my-2 h-[40px] w-[24px] cursor-pointer bg-[url(https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg)]"></div>
            <p className="text-center text-base font-semibold">
              Venti
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