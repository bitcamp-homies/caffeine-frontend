// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import CafeSwipe from './CafeSwipe'
import ThumbsUpLetter from 'components/resources/ThumbsUpLetter'
import ThumbsDownLetter from 'components/resources/ThumbsDownLetter'

const CafeSwipeContainer = () => {
  const [cafeData, setcafeData] = useState([])
  //3000미터 근방 카페
  const getCafeListAll = (userLocation) => {
    axios
      .get(
        `${process.env.REACT_APP_THUMBS_API_ADDRESS}/cafe/listBoundary3000Mybatis`,
        {
          params: {
            userLong: userLocation.long,
            userLat: userLocation.lat,
          },
        },
      )
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

  const [likeOpacity, setLikeOpacity] = useState(0)
  const [nopeOpacity, setNopeOpacity] = useState(0)

  function handleRemove(cafe_id) {
    const newCafeData = cafeData.filter((item) => item.cafe_id !== cafe_id)
    setcafeData(newCafeData)
  }

  return (
    <div id="cafe_container" className="relative lg:mt-12">
      <div id="control_boxes">
        <div
          id="like_box"
          className="absolute inset-x-0 top-[17rem] z-10 m-auto flex h-32 w-56 flex-row items-center justify-center rounded-3xl bg-blue-500 shadow-lg"
          style={{ opacity: likeOpacity }}
        >
          <ThumbsUpLetter />
          <p className="mb-1 text-4xl">👍🏻</p>
        </div>
        <div
          id="nope_box"
          className="absolute inset-x-0 top-[17rem] z-10 m-auto flex h-32 w-56 flex-row items-center justify-center rounded-3xl bg-red-500 shadow-lg"
          style={{ opacity: nopeOpacity }}
        >
          <ThumbsDownLetter />
          <p className="mb-1 text-4xl">👎🏻</p>
        </div>
        <div id="cafe_list" ref={this.blurRef}>
          {cafeData.map((cafeInfo) => (
            <div key={cafeInfo.cafe_id}>
                <CafeSwipe
                  cafeInfo={cafeInfo}
                  likeOpacity={likeOpacity}
                  setLikeOpacity={setLikeOpacity}
                  nopeOpacity={nopeOpacity}
                  setNopeOpacity={setNopeOpacity}
                  handleRemove={handleRemove}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CafeSwipeContainer
