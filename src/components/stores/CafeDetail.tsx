// @ts-nocheck
import { Link, useParams } from 'react-router-dom'
import Carousel from './Carousel'
import { ReactComponent as XIcon } from './svg/x-svgrepo-com.svg'
import axios from 'axios'
import React from 'react'

const CafeDetail = () => {
  const { cafename } = useParams()

  const [LocInfo, setLocInfo] = React.useState([])
  const [userLong, setUserLong] = React.useState(0)
  const [userLat, setUserLat] = React.useState(0)
  // const cafedata = data?.data.filter((item) => item.cafe_name === cafename)
   const Locdata = LocInfo.filter((item) => item.cafe_name === cafename)

  const onClick = (Loclong, Loclat) => {
    location.href = `https://map.kakao.com/link/to/${cafename},${Loclong},${Loclat}`
  }

  const getCafeListAll = (userLocation) => {
    axios
      .get('http://localhost:8080/cafe/listBoundary3000Mybatis', {
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
    <div className="h-128 basis-full lg:flex lg:basis-2/5 lg:flex-col">
      <div className="w-full px-4 lg:w-[28rem] xl:w-[35rem]">
        <Link to="/store">
          <button className="mt-3">
            <XIcon />
          </button>
        </Link>
        <div className="pt-2 pb-5 text-center">
          { LocInfo !== '' && <Carousel data={Locdata}/> }
        </div>

        <div className="pt-2 text-center">
          <h3 className="text-bold bg-gray-300 px-4 text-base">COMMENT</h3>
          <div className="pr-2.5 pt-4 pb-5">
            <div className="container m-auto px-8 text-gray-600 md:px-12 xl:px-6">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 sm:flex sm:space-x-8 sm:p-2">
                {Locdata.map((item) => {
                  const profile =
                    'https://storage.cloud.google.com/bitcamp-caffeine.appspot.com' +
                    item.file_path +
                    item.img_file.split(',').splice(-1, 1)
                  return (
                    <img
                      key={item.cafe_id}
                      className="mx-auto h-20 w-20 rounded-full"
                      src={profile}
                      alt="user avatar"
                      height="220"
                      width="220"
                      loading="lazy"
                    />
                  )
                })}
                <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-gray-600">
                    <span className="font-serif">"</span>
                    {Locdata.map((item) => {
                      return <span key={item.cafe_id}>{item.about}</span>
                    })}
                    <span className="font-serif">"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-bold bg-gray-300 px-4 text-base">REVIEW</h3>
          <div className="px-4 pt-4 pb-5">
            <p>
              {Locdata.map((item, index) => {
                return (
                  <span key={index}>{Math.round(item.distance * 10) / 10}</span>
                )
              })}
            </p>
          </div>

          <div className="pb-5 text-center">
            <h1 className="text-bold pr-7 text-lg"></h1>
            <p>
              <span></span>
              <span></span>
              <span></span>
            </p>
            {Locdata.map((item, index) => {
              return (
                <button
                  className="ml-4 h-8 w-40 rounded-full border-2 border-green-800 text-center text-green-800"
                  type="button"
                  onClick={() => onClick(item.longitude, item.latitude)}
                >
                  Get Location
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default CafeDetail
