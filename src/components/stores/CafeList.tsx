import { ReactComponent as LikeIcon } from './heart-svgrepo-com.svg';
import { ReactComponent as InfoIcon } from './info-svgrepo-com.svg';
import { Link } from "react-router-dom";
import React from 'react';

const CafeList = ({data}:any) => {
  type cafeData = {
    insta_account : string,
    cafe_name : string,
    address1 : string,
    address2 : string,
    address3 : string,
    address4 : string,
    about : string,
    subfolder: string
  }
  let DetailLink;
  
  return (
<ul className='w-full lg:w-[28rem] h-[440px] overflow-scroll overflow-x-hidden'>
      {
        data.map((item:cafeData, index:number) => {
          DetailLink = `/store/${item.cafe_name}`
          return (<li className='p-4 hover:bg-gray-100' key={index}>
            <div className='flex space-x-4 justify-around'>
              <div className='w-60'>
                <div className='font-bold text-sm'>
                  {item.cafe_name}
                </div>
                <div className='text-xs'>
                  {item.address2},{item.address3}
                </div>
              </div>
              <div>
                <button className='relative ml-6 w-4 h-4'>
                  <LikeIcon fill="#dd9c4f"/>
                </button>
                <Link to={DetailLink}>
                  <button className='relative ml-6 w-4 h-4'>
                    <InfoIcon fill="#dd9c4f"/>
                  </button>
                </Link>
              </div>
            </div>
          </li>);
        })
      }
    </ul>
  );
};

export default CafeList;