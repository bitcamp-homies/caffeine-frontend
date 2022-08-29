// @ts-nocheck
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import CafeSwipe from './CafeSwipe'

const CafeSwipeContainer = () => {
  const [cafeData, setcafeData] = useState([])
  let cafeInfo = cafeData.filter((item, index) => index === 3)

  //3000미터 근방 카페
  const getCafeListAll = (userLocation) => {
    axios
      .get(`${process.env.REACT_APP_THUMBS_API_ADDRESS}/cafe/listBoundary3000Mybatis`, {
        params: {
          userLong: userLocation.long,
          userLat: userLocation.lat,
        },
      })
      .then((res) => {
        setcafeData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getUserLocationAndGetCafeList = () => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude // 경도
        getCafeListAll({ long: lon, lat: lat })
      })
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      console.log('위치불러오기실패...!')
    }
  }

  React.useEffect(() => {
    getUserLocationAndGetCafeList()
  }, [])
  
  return (
    <div id='cafe_container'>
      <CafeSwipe cafeInfo={cafeInfo}/>
    </div>
  );
};

export default CafeSwipeContainer;