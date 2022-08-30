//@ts-nocheck

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CafeFilterListBox from './filter/CafeFilterListBox'
import CafeListTable from './CafeListTable'
import SearchFilterListBox from './filter/SearchFilterListBox'

const CafeCoordManage = () => {
  const [data, setData] = useState([])
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [userLong, setUserLong] = useState(0)
  const [userLat, setUserLat] = useState(0)
  const [options, setOptions] = useState([
    { value: '', text: '검색옵션' },
    { value: 'cafe_name', text: '카페이름' },
    { value: 'address1', text: '주소1 ( 예 : 서울 )' },
    { value: 'address2', text: '주소2 ( 예 : 강남구 )' },
  ])

  const [listFilter, setListFilter] = useState({ filter: 'address' })

  const [selected, setSelected] = useState(options[0])
  const [keyword, setKeyword] = useState('')

  const handleChange = (event) => {
    console.log(event.target.value)
    setSelected(event.target.value)
  }

  var geocoder = new window.kakao.maps.services.Geocoder()

  const getCafeListAll = (userLocation) => {
    axios
      .get(
        `${process.env.REACT_APP_THUMBS_API_ADDRESS}/cafe/listAlllWithCoordMybatis`,
        {
          params: {
            userLong: userLocation.long,
            userLat: userLocation.lat,
          },
        },
      )
      .then((res) => {
        setData(res.data)
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

  const setGeoCoord = (addr2, addr3, cafe_id) => {
    geocoder.addressSearch(`${addr2} ${addr3}`, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        setLongitude(result[0].x)
        setLatitude(result[0].y)
        console.log('좌표 검색 결과 : ', result[0].y, result[0].x)
        axios
          .get(
            `${process.env.REACT_APP_THUMBS_API_ADDRESS}/cafe/updateCoordMybatis`,
            {
              params: {
                longitude: result[0].x,
                latitude: result[0].y,
                cafe_id: cafe_id,
              },
            },
          )
          .catch((err) => console.log(err))
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        console.log('ZERO_RESULT...검색결과가 없습니다.')
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        console.log('error발생..!')
      }
    })
  }

  const setGeoCoordAllCafe = (cafeList) => {
    for (var i = 0; i < cafeList.length; i++) {
      setGeoCoord(
        cafeList[i].address2,
        cafeList[i].address3,
        cafeList[i].cafe_id,
      )
    }
  }

  const getRandomOpentime = () => {
    //풍혁0826 : opentime은 hour는 9, 10, 11 중 하나 min 은 0 , 15, 30, 45 중 하나
    const opentimeHour = Math.floor(Math.random() * 3 + 9)
    const opentimeMin = 15 * Math.floor(Math.random() * 4)
    const opentime = opentimeHour * 100 + opentimeMin

    return opentime
  }

  const getRandomClosetime = () => {
    //풍혁0826 : close은 hour는 18, 19, 20 중 하나 min 은 0 , 15, 30, 45 중 하나
    const closetimeHour = Math.floor(Math.random() * 3 + 18)
    const closetimeMin = 15 * Math.floor(Math.random() * 4)
    const closetime = closetimeHour * 100 + closetimeMin

    return closetime
  }

  //풍혁0826 : pet과 parking은 1/3의 확률로 Y가 들어갑니다. 현실은 이보다 훨씬 적겠지만 filter 효과를 보여주기 위해 좀 많이 Y가 되도록
  const getRandomY = () => {
    const rand = Math.floor(Math.random() * 3 + 1)
    if (rand % 3 === 0) {
      return 'Y'
    } else {
      return 'N'
    }
  }

  const updateCafeinfo = (cafe_id) => {
    const cafeinfo = {
      opentime: getRandomOpentime(),
      closetime: getRandomClosetime(),
      pet: getRandomY(),
      parking: getRandomY(),
      cafe_id: cafe_id,
    }

    axios
      .get(`${process.env.REACT_APP_THUMBS_API_ADDRESS}/cafe/updateCafeinfo`, {
        params: cafeinfo,
      })
      .catch((err) => console.log(err))
  }

  const setRandomInfoAllCafe = (cafeList) => {
    console.log(cafeList.length + ' 개의 카페에 랜덤으로 info 를 넣겠습니다.')
    for (var i = 0; i < cafeList.length; i++) {
      updateCafeinfo(i)
    }
    alert('setRandomInfoAllCafe 완료')
  }

  useEffect(() => {
    getUserLocationAndGetCafeList()
  }, [])

  var filteredData = data
  if (selected.value === 'cafe_name') {
    filteredData = data.filter((item) => item.cafe_name.indexOf(keyword) >= 0)
  } else if (selected.value === 'address1') {
    filteredData = data.filter((item) => item.address1.indexOf(keyword) >= 0)
  } else if (selected.value === 'address2') {
    filteredData = data.filter((item) => item.address2.indexOf(keyword) >= 0)
  }

  return (
    <div className="my-8">
      <div className="text-xl font-semibold">CaefList Filter</div>
      <CafeFilterListBox setListFilter={setListFilter} />
      {listFilter.filter === '경위도좌표' && (
        <div className="my-4">
          <button
            onClick={() => setGeoCoordAllCafe(data)}
            className="text-semibold h-10 w-40 rounded-lg border-none bg-[#9F2042] text-center text-white drop-shadow-lg hover:bg-[#3D1308]"
          >
            전체 카페 좌표 최신화
          </button>
        </div>
      )}
      {listFilter.filter === '카페정보' && (
        <div className="my-4">
          <button
            onClick={() => setRandomInfoAllCafe(data)}
            className="text-semibold h-10 w-40 rounded-lg border-none bg-[#9F2042] text-center text-white drop-shadow-lg hover:bg-[#3D1308]"
          >
            전체 카페 정보 무작위
          </button>
        </div>
      )}

      <div className="mt-4 text-xl font-semibold">CaefList Search</div>
      <SearchFilterListBox options={options} setSelected={setSelected} />
      {selected.value && (
        <div className="my-2 mt-4">
          <input
            type="text"
            placeholder="여기 입력하세요"
            className={`h-12 w-72 rounded-lg border-b-2 border-[black] text-center `}
            disabled={selected.value ? false : true}
            onChange={(event) => setKeyword(event.target.value)}
          />
        </div>
      )}
      <hr/>
      <div className="h-[36rem] w-[72rem] overflow-scroll rounded-lg my-4">
        <CafeListTable
          listFilter={listFilter}
          filteredData={filteredData}
          setGeoCoord={setGeoCoord}
          updateCafeinfo={updateCafeinfo}
        />
      </div>
    </div>
  )
}

export default CafeCoordManage
