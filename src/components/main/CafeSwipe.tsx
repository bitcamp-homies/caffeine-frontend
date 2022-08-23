import React from 'react'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import app from 'api/firebase'
import TempIndexIcon from './TempIndexIcon'

const CafeSwipe = () => {
  //Firebase 불러오기 (import from "firebase/storage")
  app.automaticDataCollectionEnabled // Initialize firebase
  const storage = getStorage() //

  /*
  // 이미지 URL 불러오기
  const gsReference = ref(storage, 'gs://bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/a3boutcoffee/gangnam-a3boutcoffee-1.jpg')
  const gsReference2 = ref(storage, 'gs://bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/a3boutcoffee/gangnam-a3boutcoffee-profile.jpg')
  
  // getDownloadURL() 메서드는 Promise를 호출함에 따라 .then으로 반환된 URL(string)을 가공해야함
  getDownloadURL(gsReference).then((img) => {
    const imgUrl = document.getElementById("img1")
    imgUrl?.setAttribute('src', img)
  })
  
  개선사항: setAttribute가 아닌 jsx(return 내부)에서 반환된 URL값으로 요소를 생성하는 방법을 고안해야할듯...
  */

  return (
    <div id="CafeSwipe" className="">
      <div className="h-3/5">
        <img
          id="img1"
          src="https://storage.googleapis.com/bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/a3boutcoffee/gangnam-a3boutcoffee-1.jpg"
          className="h-full w-full object-contain"
        />
      </div>
      <div id="cafe_profile" className="flex flex-col items-center px-5">
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
        <div className="flex flex-row pt-3">
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
    </div>
  )
}

export default CafeSwipe
