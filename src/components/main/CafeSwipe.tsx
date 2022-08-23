import React from 'react'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import app from 'api/firebase'
import TempIndexIcon from './TempIndexIcon'
import { motion } from 'framer-motion'

const CafeSwipe = () => {
  function ThumbsUp() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="258.2"
        height="72"
        viewBox="0 0 258.2 72"
        className="ml-6 w-28"
      >
        <path
          fill="#ffffff00"
          fillRule="evenodd"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="0.75mm"
          d="M149.1 72h-15.5a6.709 6.709 0 01-.986-.067q-.5-.075-.898-.232a2.506 2.506 0 01-.866-.551 2.527 2.527 0 01-.566-.904Q130 69.499 130 68.4V3.6a6.709 6.709 0 01.067-.986q.075-.5.232-.898a2.506 2.506 0 01.551-.866 2.527 2.527 0 01.904-.566Q132.502 0 133.6 0h15.5a6.709 6.709 0 01.986.067q.5.075.898.232a2.506 2.506 0 01.866.551 2.527 2.527 0 01.566.904q.284.748.284 1.846v23h4L167 3.3a7.141 7.141 0 01.54-1.113q.358-.591.8-1.004a3.649 3.649 0 01.56-.433q1.041-.65 2.607-.737A8.947 8.947 0 01172 0h15.4q1.588 0 2.216.742a1.555 1.555 0 01.084.108 1.514 1.514 0 01.263.703q.066.548-.18 1.277a5.836 5.836 0 01-.183.47l-10.2 23.3a14.832 14.832 0 014.179.797 11.674 11.674 0 014.771 3.153 12.407 12.407 0 012.989 5.966 17.896 17.896 0 01.361 3.684v28.2a6.709 6.709 0 01-.067.986q-.075.5-.232.898a2.506 2.506 0 01-.551.866 2.527 2.527 0 01-.904.566q-.747.284-1.846.284h-15.4a6.709 6.709 0 01-.986-.067q-.5-.075-.898-.232a2.506 2.506 0 01-.866-.551 2.527 2.527 0 01-.566-.904q-.284-.747-.284-1.846V48.9q0-1.226-.47-2.042a2.772 2.772 0 00-.33-.458 2.531 2.531 0 00-1.192-.74q-.416-.125-.919-.152a5.31 5.31 0 00-.289-.008h-13.2v22.9a6.709 6.709 0 01-.067.986q-.075.5-.232.898a2.506 2.506 0 01-.551.866 2.527 2.527 0 01-.904.566q-.747.284-1.846.284zm105.5 0h-46.4a6.709 6.709 0 01-.986-.067q-.5-.075-.898-.232a2.506 2.506 0 01-.866-.551 2.527 2.527 0 01-.566-.904q-.284-.747-.284-1.846V3.6a6.709 6.709 0 01.067-.986q.075-.5.232-.898a2.506 2.506 0 01.551-.866 2.527 2.527 0 01.904-.566Q207.102 0 208.2 0h46.4a6.709 6.709 0 01.986.067q.5.075.898.232a2.506 2.506 0 01.866.551 2.527 2.527 0 01.566.904q.284.748.284 1.846v11.7a6.709 6.709 0 01-.067.986q-.075.5-.232.898a2.506 2.506 0 01-.551.866 2.527 2.527 0 01-.904.566q-.747.284-1.846.284H227v7.7h19.5a6.709 6.709 0 01.986.067q.5.075.898.232a2.506 2.506 0 01.866.551 2.527 2.527 0 01.566.904q.284.748.284 1.846v10.7a6.709 6.709 0 01-.067.986q-.075.5-.232.898a2.506 2.506 0 01-.551.866 2.527 2.527 0 01-.904.566q-.747.284-1.846.284H227v8.6h27.6a6.709 6.709 0 01.986.067q.5.075.898.232a2.506 2.506 0 01.866.551 2.527 2.527 0 01.566.904q.284.748.284 1.846v11.7a6.709 6.709 0 01-.067.986q-.075.5-.232.898a2.506 2.506 0 01-.551.866 2.527 2.527 0 01-.904.566q-.747.284-1.846.284zM54.5 72H3.6a6.709 6.709 0 01-.986-.067q-.5-.075-.898-.232a2.506 2.506 0 01-.866-.551 2.527 2.527 0 01-.566-.904Q0 69.499 0 68.4V3.6a6.709 6.709 0 01.067-.986q.075-.5.232-.898A2.506 2.506 0 01.85.85a2.527 2.527 0 01.904-.566Q2.502 0 3.6 0h15.5a6.709 6.709 0 01.986.067q.5.075.898.232a2.506 2.506 0 01.866.551 2.527 2.527 0 01.566.904q.284.748.284 1.846v49.5h13.7V36.9a6.709 6.709 0 01.067-.986q.075-.5.232-.898a2.506 2.506 0 01.551-.866 2.527 2.527 0 01.904-.566Q38.902 33.3 40 33.3h14.5a6.709 6.709 0 01.986.067q.5.075.898.232a2.506 2.506 0 01.866.551 2.527 2.527 0 01.566.904q.284.748.284 1.846v31.5a6.709 6.709 0 01-.067.986q-.075.5-.232.898a2.506 2.506 0 01-.551.866 2.527 2.527 0 01-.904.566Q55.599 72 54.5 72zm59.6 0H71.5a6.709 6.709 0 01-.986-.067q-.5-.075-.898-.232a2.506 2.506 0 01-.866-.551 2.527 2.527 0 01-.566-.904q-.284-.747-.284-1.846V56.5a6.709 6.709 0 01.067-.986q.075-.5.232-.898a2.506 2.506 0 01.551-.866 2.527 2.527 0 01.904-.566q.748-.284 1.846-.284h9.9V19.3h-9.9a6.709 6.709 0 01-.986-.067q-.5-.075-.898-.232a2.506 2.506 0 01-.866-.551 2.527 2.527 0 01-.566-.904q-.284-.747-.284-1.846V3.6a6.709 6.709 0 01.067-.986q.075-.5.232-.898A2.506 2.506 0 0168.75.85a2.527 2.527 0 01.904-.566Q70.402 0 71.5 0h42.6a6.709 6.709 0 01.986.067q.5.075.898.232a2.506 2.506 0 01.866.551 2.527 2.527 0 01.566.904q.284.748.284 1.846v12.1a6.709 6.709 0 01-.067.986q-.075.5-.232.898a2.506 2.506 0 01-.551.866 2.527 2.527 0 01-.904.566q-.747.284-1.846.284h-9.7v33.6h9.7a6.709 6.709 0 01.986.067q.5.075.898.232a2.506 2.506 0 01.866.551 2.527 2.527 0 01.566.904q.284.748.284 1.846v11.9a6.709 6.709 0 01-.067.986q-.075.5-.232.898a2.506 2.506 0 01-.551.866 2.527 2.527 0 01-.904.566q-.747.284-1.846.284z"
          fontSize="12"
          vectorEffect="non-scaling-stroke"
        ></path>
      </svg>
    )
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 z-10 m-auto flex h-32 w-56 flex-row items-center justify-center rounded-3xl bg-blue-500"
           style={{ opacity: 0.7 }}>
        {ThumbsUp()}
        <p className="mb-1 text-4xl">👍🏻</p>
      </div>
      <motion.div
        id="CafeSwipe"
        className="my-2 rounded-lg shadow-xl md:mx-auto md:mt-4 md:max-w-[24rem]"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7}
        dragPropagation
        onDrag={(event, info) => console.log(info.offset.x, info.offset.y)}
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
