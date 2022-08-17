//@ts-nocheck

import React from 'react';
import axios from 'axios';
import { ReactComponent as LikeIcon } from './svg/heart-svgrepo-com.svg';
import { ReactComponent as InfoIcon } from './svg/info-svgrepo-com.svg';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeMain } from 'store/modules/mapMarker';

const CafeList = () => {
  const dispatch = useDispatch();

  const [data, setData] = React.useState([]);
  let DetailLink;
  
  React.useEffect(
    
    () => {
      axios.get(`http://localhost:8080/cafe/listAll`)
      .then(
        (res) => {
          setData(res.data);
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
    }, [])
  
  return (
<ul className='w-96 h-96 overflow-scroll overflow-x-hidden'>
      {
        data.map((item, index) => {
          DetailLink = `/store/${item.cafe_name}`
          return (<li className='p-4 hover:bg-gray-100' key={index} onMouseOver={ () => dispatch(changeMain(item)) }>
            <div className='flex space-x-4 justify-around'>
              <div className='w-60'>
                <div className='font-bold text-sm'>
                  {item.cafe_name}
                </div>
                <div className='text-xs'>
                  {item.address2},{item.address3}
                </div>
              </div>
              <button className='w-4 h-4'>
                <LikeIcon fill="#dd9c4f"/>
              </button>
              <Link to={DetailLink}>
              <button className='w-4 h-4'>
                <InfoIcon fill="#dd9c4f"/>
              </button>
              </Link>
            </div>
          </li>);
        })
      }
    </ul>
  );
};

export default CafeList;