// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ThumbsUpLetter from 'components/resources/ThumbsUpLetter'
import ThumbsDownLetter from 'components/resources/ThumbsDownLetter'

import CafeInfo from './CafeInfo'
import axios from 'axios'

let currentX = 0
const offsetDivider = 250

const CafeSwipe = ({ cafeInfo, likeOpacity, setLikeOpacity, nopeOpacity, setNopeOpacity }) => {
  const [cafeSwipeOpacity, setCafeSwipeOpacity] = useState(1)

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
  const LikeOrNope = (offsetX: number, deltaX) => {
    if (offsetX > 200) {
      alert('LIKE: 즐겨찾는 카페에 등록되었습니다.')
      setCafeSwipeOpacity(1)
      setLikeOpacity(0)
    } else if (offsetX < -200 && Math.abs(offsetX) - Math.abs(deltaX) > 150) {
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
    <div className='absolute inset-0 z-0'>
      <div className="relative">
        <motion.div
          id="CafeSwipe"
          className="my-2 rounded-3xl pt-10 shadow-lg shadow-slate-300  md:mx-auto md:mt-3 md:max-w-[28rem] bg-white"
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

export default CafeSwipe
