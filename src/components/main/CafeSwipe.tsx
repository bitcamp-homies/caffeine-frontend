// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ThumbsUpLetter from 'components/resources/ThumbsUpLetter'
import ThumbsDownLetter from 'components/resources/ThumbsDownLetter'

import CafeInfo from './CafeInfo'
import axios from 'axios'

let currentX = 0
const offsetDivider = 250
const likeNopeDivider = 50

const CafeSwipe = ({
  cafeInfo,
  likeOpacity,
  setLikeOpacity,
  nopeOpacity,
  setNopeOpacity,
  handleRemove,
  idx,
  swipeCount,
  setSwipeCount,
  blur,
  setBlurArr,
  blurArr,
  CafeSwipeContainer,
  getUserLocationAndGetCafeList,
}) => {
  const [cafeSwipeOpacity, setCafeSwipeOpacity] = useState(1)
  const cafe_id = cafeInfo.cafe_id

  //스와이프 opacity 변화
  const handleOpacityUpdate = (offsetX: number) => {
    if (Math.abs(offsetX) < 30) {
      setCafeSwipeOpacity(1)
      setLikeOpacity(0)
      setNopeOpacity(0)
      currentX = offsetX
    } else if (offsetX > 0) {
      if (offsetX > currentX) {
        setLikeOpacity(likeOpacity + (offsetX - currentX) / likeNopeDivider)
        setCafeSwipeOpacity(
          cafeSwipeOpacity - (offsetX - currentX) / offsetDivider,
        )
        currentX = offsetX
      } else {
        setLikeOpacity(likeOpacity - (currentX - offsetX) / likeNopeDivider)
        setCafeSwipeOpacity(
          cafeSwipeOpacity + (currentX - offsetX) / offsetDivider,
        )
        currentX = offsetX
      }
    } else if (offsetX < 0) {
      if (offsetX < currentX) {
        setNopeOpacity(nopeOpacity + (currentX - offsetX) / likeNopeDivider)
        setCafeSwipeOpacity(
          cafeSwipeOpacity - (currentX - offsetX) / offsetDivider,
        )
        currentX = offsetX
      } else {
        setNopeOpacity(nopeOpacity - (offsetX - currentX) / likeNopeDivider)
        setCafeSwipeOpacity(
          cafeSwipeOpacity + (offsetX - currentX) / offsetDivider,
        )
        currentX = offsetX
      }
    } else return
  }
  //스와이프 action
  const LikeOrNope = (offsetX: number, deltaX) => {
    if (offsetX > 200) {
      if (swipeCount === 3) {
        alert('새로운 카페를 보여드립니다 😉')
        setSwipeCount(0)
        setNopeOpacity(0)
        setLikeOpacity(0)
        getUserLocationAndGetCafeList()
        setBlurArr(['blur-sm',
        'blur-sm',
        'blur-sm',
        '',])
      } else {
        setCafeSwipeOpacity(1)
        setLikeOpacity(0)
        handleRemove(cafe_id)
        const blurArrTmp = blurArr
        blurArrTmp[idx - 1] = ''
        setBlurArr(blurArrTmp)
        setSwipeCount((swipeCount += 1))
      }
    } else if (offsetX < -200 && Math.abs(offsetX) - Math.abs(deltaX) > 150) {
      if (swipeCount === 3) {
        alert('새로운 카페를 보여드립니다 😉')
        setSwipeCount(0)
        setNopeOpacity(0)
        setLikeOpacity(0)
        getUserLocationAndGetCafeList()
        setBlurArr(['blur-sm',
        'blur-sm',
        'blur-sm',
        '',])
      } else {
        setCafeSwipeOpacity(1)
        setNopeOpacity(0)
        handleRemove(cafe_id)
        const blurArrTmp = blurArr
        blurArrTmp[idx - 1] = ''
        setBlurArr(blurArrTmp)
        setSwipeCount((swipeCount += 1))
      }
    } else {
      setCafeSwipeOpacity(1)
      setLikeOpacity(0)
      setNopeOpacity(0)
    }
    currentX = 0
  }

  return (
    <div className="absolute inset-0 z-0">
      <div className="relative">
        <motion.div
          id="CafeSwipe"
          className={`my-2 rounded-3xl border-2 bg-white shadow-lg  shadow-slate-300 md:mx-auto md:mt-3 md:max-w-[28rem] ${blur}`}
          style={{ opacity: cafeSwipeOpacity }}
          drag
          dragSnapToOrigin
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.3}
          onDrag={(event, info) => handleOpacityUpdate(info.offset.x)}
          onDragEnd={(event, info) => LikeOrNope(info.offset.x, info.delta.x)}
        >
          <CafeInfo cafeInfo={cafeInfo} />
        </motion.div>
      </div>
    </div>
  )
}

export default React.memo(CafeSwipe)
