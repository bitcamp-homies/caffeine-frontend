// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { listAllMybatis } from 'store/api';
import DrinksDetail from './productRsc/DrinksDetail';

const DetailContainer = ({data,menu,cafe_name,img}) => {

  const [address,SetAddress] = useState([])
  useEffect(()=>{
    listAllMybatis()
    .then(res => SetAddress(res.data))
  },[])
  let addressfilter
  if(address !== ''){
    addressfilter = address.filter((item) => item.cafe_id === data[0].cafe_id)
  }  
  return (
    <div className="bg-white grid gap-5 grid-col px-6 pt-5 ">
             <div className="h-full w-full bg-red-800 rounded">
          <div className="my-5 flex h-full flex-col justify-center lg:mr-[100px] lg:flex-row">
                  <img
                    className="my-5 mx-auto rounded-full h-[200px] w-[50px] min-w-[200px] lg:my-auto lg:mx-[99px]"
                    src={`https://storage.cloud.google.com/bitcamp-caffeine.appspot.com${img}`}
                    alt="user avatar"
                    loading="lazy"
                  />
            <div className="items-center font-extrabold text-white  lg:my-auto">
              <div className="mx-auto my-10 w-80 items-center justify-center text-center text-4xl lg:mx-0  lg:w-[400px] lg:text-start">
                    <p>{cafe_name}</p>
              </div>
              <div className="mx-auto mb-5 w-[100%] text-center text-base font-semibold text-gray-400 lg:mx-0 lg:w-[600px] lg:text-2xl lg:font-normal">
                <div className="mt-5">
                   <div className="mx-auto flex flex-row items-center">
                    <svg className="mr-3 h-[24px] w-[24px] overflow-visible fill-current	text-gray-400">
                      <path d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z"></path>
                      <path d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z"></path>
                    </svg>
                    {address !== '' &&
                      addressfilter.map((item) => {
                        const address = `${item.address1} ${item.address2} ${item.address3}`
                        const address4 = item.address4
                        return (
                          <p
                            key={item.cafe_id}
                            className="text-gray-400"
                            onClick={() => window.open(`${map}${address}`)}
                          >
                            {`${address}${address4}`}
                          </p>
                        )
                      })}
                  </div> 
                  <div className="flex w-auto items-center">
                    <img
                      className="ml-1 mr-3 w-4 "
                      src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2016/png/iconmonstr-instagram-11.png&r=138&g=138&b=138"
                    />
                     {address !== '' &&
                      addressfilter.map((item) => {
                        return (
                          <button
                            key={item.cafe_id}
                            className="truncate text-gray-400 underline"
                            onClick={() => window.open(`${instagramUrl}${item.insta_account}`)}
                          >
                            @{item.insta_account}
                          </button>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="pb-4 pt-5 text-bold text-3xl font-bold">Menu</div>
      {
        <div className="text-xl font-bold pb-2">
          {menu}
        </div>
      }
      <hr/>
        <DrinksDetail data ={data}/>
    </div>
  );
};
export default DetailContainer;