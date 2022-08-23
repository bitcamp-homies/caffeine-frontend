// @ts-nocheck
import TempIndexIcon from './TempIndexIcon'
import axios from 'axios'
import React from 'react'

const [LocInfo, setLocInfo] = React.useState([])
const [userLong, setUserLong] = React.useState(0)
const [userLat, setUserLat] = React.useState(0)
const cafedata = data?.data.filter((item) => item.cafe_name === cafename)
const Locdata = LocInfo.filter((item) => item.cafe_name === cafename)
//console.log(Locdata)

const getCafeListAll = (userLocation) => {
  axios
    .get('http://localhost:8080/cafe/listAlllWithCoordMybatis', {
      params: {
        userLong: userLocation.long,
        userLat: userLocation.lat,
      },
    })
    .then((res) => {
      setLocInfo(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

const getUserLocationAndGetCafeList = () => {
  console.log('user loc 집어넣기')

  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude // 경도
      console.log('사용자 위치 : ', lon, lat)
      setUserLong(lon)
      setUserLat(lat)
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

const CafeSwipe = () => {

  return (
    <div id="CafeSwipe" className="md:mx-auto md:mt-4 md:max-w-[24rem] md:shadow">
      <div className="">
        <img
          id="img1"
          src="https://storage.googleapis.com/bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/a3boutcoffee/gangnam-a3boutcoffee-1.jpg"
          className="max-h-96 w-full object-contain"
        />
      </div>
      <div id="cafe_profile" className="flex flex-col items-center px-5 md:pb-6">
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
