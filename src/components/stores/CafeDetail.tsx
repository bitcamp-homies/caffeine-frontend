// @ts-nocheck
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as XIcon } from './svg/x-svgrepo-com.svg'
import axios from 'axios'
import React from 'react'
import CafeInfo from 'components/main/CafeInfo'

const CafeDetail = ({ setHoverCafe }) => {
  const { cafename } = useParams()

  const [cafeData, setcafeData] = React.useState([])
  const cafeInfo = cafeData.filter((item) => item.cafe_name === cafename)

  const onClick = (Loclong, Loclat) => {
    location.href = `https://map.kakao.com/link/to/${cafename},${Loclong},${Loclat}`
  }

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
          <button
            className="mt-3"
            onClick={() =>
              setHoverCafe({
                cafe_id: 0,
                user_id: 0,
                cafe_name: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                longitude: 0,
                latitude: 0,
                distance: 0,
              })
            }
          >
            <XIcon />
          </button>
        </Link>

        <CafeInfo cafeInfo={cafeInfo}></CafeInfo>

          <div className="pb-5 text-center">
            <h1 className="text-bold pr-7 text-lg"></h1>
            {cafeInfo.map((item, index) => {
              return (
                <>
                <span key={index}>{Math.round(item.distance * 10) / 10}</span>
                <button
                  className="ml-4 h-8 w-40 rounded-full border-2 border-green-800 text-center text-green-800"
                  type="button"
                  onClick={() => onClick(item.longitude, item.latitude)}
                >
                  Get Location
                </button>
                </>
              )
            })}
          </div>
        </div>
    </div>
  )
}
export default CafeDetail
