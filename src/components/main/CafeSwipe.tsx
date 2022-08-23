// @ts-nocheck

import React, { useEffect, useState } from 'react'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import app from 'api/firebase'
import TempIndexIcon from './TempIndexIcon'
import { motion } from 'framer-motion'
import ThumbsUpLetter from './ThumbsUpLetter'

let x = 0

const CafeSwipe = () => {
  const [likeOpacity, setLikeOpacity] = useState(0)
  const [cafeSwipeOpacity, setCafeSwipeOpacity] = useState(1)

  const handleOpacityUpdate = (offsetX) => {
    if (offsetX != x && offsetX % 10 > 1) {
      setLikeOpacity(likeOpacity + (offsetX / 10000))
      setCafeSwipeOpacity(cafeSwipeOpacity - (offsetX / 10000))
      x = offsetX
    }
  }

  return (
    <div className="relative">
      <div
        className="absolute inset-0 z-10 m-auto flex h-32 w-56 flex-row items-center justify-center rounded-3xl bg-blue-500"
        style={{ opacity: likeOpacity }}
      >
        <ThumbsUpLetter />
        <p className="mb-1 text-4xl">👍🏻</p>
      </div>
      <motion.div
        id="CafeSwipe"
        className="my-2 rounded-lg shadow-xl md:mx-auto md:mt-4 md:max-w-[24rem]"
        style={{ opacity: cafeSwipeOpacity}}
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7}
        dragPropagation
        onDrag={(event, info) => 
          handleOpacityUpdate(info.offset.x)
        }
      >
        <div className="">
          <img
            id="img1"
            src="https://storage.googleapis.com/bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/a3boutcoffee/gangnam-a3boutcoffee-1.jpg"
            className="max-h-96 w-full object-contain pt-2"
          />
        </div>
        <div
          id="cafe_profile"
          className="flex flex-col items-center px-5 md:pb-6"
        >
          <div id="head" className="flex flex-row border-b py-4">
            <div>
              <div id="profile_img" className="relative pr-6">
                <button
                  className="h-20 w-20 rounded-full bg-[url('https://storage.googleapis.com/bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/a3boutcoffee/gangnam-a3boutcoffee-profile.jpg')]
                  bg-contain bg-center outline outline-1 outline-gray-300"
                ></button>
                <button className="absolute left-14 rounded-full bg-orange-600 px-1 pt-2 pb-1 font-gMarketLight text-[11px] text-white">
                  385
                </button>
              </div>
            </div>
            <div className="flex flex-col" id="profile_info">
              <p className="text-lg font-semibold">에이쓰리바우트 커피 🚨</p>
              <p className="pt-1 text-sm text-gray-500">
                서울 강남구 강남대로154길 19
              </p>
              <p className="pt-1 text-sm text-gray-500">@a3boutcoffee</p>
              <div className="h-[11.5rem] shrink">
                <p className="pt-3 text-sm line-clamp-[9]">
                  2019 로스팅 월드 챔피언이 있는 곳<br />
                  Mon - Fri 8:00~18:00
                  <br />
                  Sat - Sun 10:00~18:00
                  <br />
                  서울시 강남구 강남대로 154길19
                  <br />
                  에이쓰리커피집 강남배전소
                  <br />
                  ⬇️온라인샵⬇️
                  <br />
                  m.smartstore.naver.com/a3bout
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-3 pb-4">
            <div className="temp_index  px-6">
              <p className="font-medium tracking-widest">온도지수</p>
              <div className="flex flex-row">
                <TempIndexIcon />
                <p className="text-2xl font-bold text-[#F24E1E]">87°</p>
              </div>
            </div>
            <div className="text-left">
              <p className="font-medium tracking-widest">한줄리뷰</p>
              <p className="pt-1 font-medium text-[#F24E1E]">
                아기자기한 소품 구경하기 좋아요!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CafeSwipe
