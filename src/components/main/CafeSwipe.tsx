// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ThumbsUpLetter from 'components/resources/ThumbsUpLetter'
import ThumbsDownLetter from 'components/resources/ThumbsDownLetter'

import CafeInfo from './CafeInfo'
import axios from 'axios'

let currentX = 0
const offsetDivider = 250

const CafeSwipe = () => {
  const [cafeData, setcafeData] = useState([])
  let cafeInfo = cafeData.filter((item, index) => index === 4)
  const [likeOpacity, setLikeOpacity] = useState(0)
  const [nopeOpacity, setNopeOpacity] = useState(0)
  const [cafeSwipeOpacity, setCafeSwipeOpacity] = useState(1)

  //3000미터 근방 카페
  const getCafeListAll = (userLocation) => {
    axios
      .get('https://api.staysane.me/cafe/listBoundary3000Mybatis', {
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

  //스와이프 opacity 변화
  const handleOpacityUpdate = (offsetX: number) => {
    if (Math.abs(offsetX) < 30) {
      setCafeSwipeOpacity(1)
      setLikeOpacity(0)
      setNopeOpacity(0)
      currentX = offsetX
    } else if (offsetX > 0) {
      if (offsetX > currentX) {
        setLikeOpacity(likeOpacity + (offsetX - currentX) / offsetDivider)
        setCafeSwipeOpacity(
          cafeSwipeOpacity - (offsetX - currentX) / offsetDivider,
        )
        currentX = offsetX
      } else {
        setLikeOpacity(likeOpacity - (currentX - offsetX) / offsetDivider)
        setCafeSwipeOpacity(
          cafeSwipeOpacity + (currentX - offsetX) / offsetDivider,
        )
        currentX = offsetX
      }
    } else if (offsetX < 0) {
      if (offsetX < currentX) {
        setNopeOpacity(nopeOpacity + (currentX - offsetX) / offsetDivider)
        setCafeSwipeOpacity(
          cafeSwipeOpacity - (currentX - offsetX) / offsetDivider,
        )
        currentX = offsetX
      } else {
        setNopeOpacity(nopeOpacity - (offsetX - currentX) / offsetDivider)
        setCafeSwipeOpacity(
          cafeSwipeOpacity + (offsetX - currentX) / offsetDivider,
        )
        currentX = offsetX
      }
    } else return
  }
  //스와이프 action
  const LikeOrNope = (offsetX: number) => {
    if (offsetX > 200) {
      alert('LIKE: 즐겨찾는 카페에 등록되었습니다.')
      setCafeSwipeOpacity(1)
      setLikeOpacity(0)
    } else if (offsetX < -200) {
      alert('NOPE: 다른 카페를 보여줍니다.')
      setCafeSwipeOpacity(1)
      setNopeOpacity(0)
    } else {
      setCafeSwipeOpacity(1)
      setLikeOpacity(0)
      setNopeOpacity(0)
    }
    currentX = 0
  }

  return (
    <div className="relative">
      <div
        id="like_box"
        className="absolute inset-0 -z-10 m-auto flex h-32 w-56 flex-row items-center justify-center rounded-3xl bg-blue-500 shadow-lg"
        style={{ opacity: likeOpacity }}
      >
        <ThumbsUpLetter />
        <p className="mb-1 text-4xl">👍🏻</p>
      </div>
      <div
        id="nope_box"
        className="absolute inset-0 -z-10 m-auto flex h-32 w-56 flex-row items-center justify-center rounded-3xl bg-red-500 shadow-lg"
        style={{ opacity: nopeOpacity }}
      >
        <ThumbsDownLetter />
        <p className="mb-1 text-4xl">👎🏻</p>
      </div>
      <motion.div
        id="CafeSwipe"
        className="my-2 rounded-lg shadow-xl md:mx-auto md:mt-3 md:max-w-[24rem]"
        style={{ opacity: cafeSwipeOpacity }}
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7}
        dragPropagation
        onDrag={(event, info) => handleOpacityUpdate(info.offset.x)}
        onDragEnd={(event, info) => LikeOrNope(info.offset.x)}
      >
        <CafeInfo cafeInfo={cafeInfo} />
      </motion.div>
    </div>
  )
}

export default CafeSwipe
