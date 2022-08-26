//@ts-nocheck

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { setCafeList } from 'store/cafeListBoundary'

const CafeCoordManage = () => {
  const [data, setData] = useState([])
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [userLong, setUserLong] = useState(0)
  const [userLat, setUserLat] = useState(0)
  const options = [
    {value: '', text: '--필터--'},
    {value: 'cafe_name', text: '카페이름'},
    {value: 'address1', text: '주소1(예 : 서울)'},
    {value: 'address2', text: '주소2(예 : 강남구)'},
  ];

  const [selected, setSelected] = useState(options[0].value);
  const [keyword, setKeyword] = useState('');

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  var geocoder = new window.kakao.maps.services.Geocoder()

  const getCafeListAll = (userLocation) => {
    axios
      .get('http://localhost:8080/cafe/listAlllWithCoordMybatis', {
        params: {
          userLong: userLocation.long,
          userLat: userLocation.lat,
        },
      })
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
          .get('http://localhost:8080/cafe/updateCoordMybatis', {
            params: {
              longitude: result[0].x,
              latitude: result[0].y,
              cafe_id: cafe_id,
            },
          })
          .catch((err) => console.log(err))
      }else if(status === window.kakao.maps.services.Status.ZERO_RESULT){
        console.log('ZERO_RESULT...검색결과가 없습니다.');
      }else if(status === window.kakao.maps.services.Status.ERROR){
        console.log('error발생..!');
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

  useEffect(() => {
    getUserLocationAndGetCafeList()
  }, [])

  var filteredData = data;
  if(selected === 'cafe_name'){
    filteredData = data.filter((item) => item.cafe_name.indexOf(keyword)>=0);
  }else if(selected === 'address1'){
    filteredData = data.filter((item) => item.address1.indexOf(keyword)>=0);
  }else if(selected === 'address2'){
    filteredData = data.filter((item) => item.address2.indexOf(keyword)>=0);
  }

  return (
    <div>
      <div>
        현재좌표 경도longitude : {longitude} 위도 latitude : {latitude}
      </div>
      <div>
        사용자위치 경도 : {userLong} 위도 : {userLat}
      </div>
      <div>
        <button
          onClick={() => setGeoCoordAllCafe(data)}
          className="text-semibold border-none bg-green-300 text-center text-white"
        >
          전체 카페 좌표 최신화
        </button>
      </div>
      <div>
        {selected} {keyword}
      </div>  
      <div className='my-2'>
        <select value={selected} onChange={handleChange}>
          {options.map(
            (option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
            )
          )}
        </select>
        <input type="text" className='border-b-2 border-black' disabled={selected ? false : true} onChange={(event) => setKeyword(event.target.value)}/>
      </div>
      <div className="h-32">
        <table>
          <thead className="sticky top-0 bg-gray-300">
            <tr>
              <th>CAFE_ID</th>
              <th>USER_ID</th>
              <th>CAFE_NAME</th>
              <th>ADDRESS1</th>
              <th>ADDRESS2</th>
              <th>ADDRESS3</th>
              <th>ADDRESS4</th>
              <th>경도 </th>
              <th>위도 </th>
              <th>사용자와 거리:m</th>
              <th>좌표최신화</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => {
              return (
                <tr
                  className="border-t-2 border-green-200 text-center"
                  key={index}
                >
                  <td>{item.cafe_id}</td>
                  <td>{item.user_id}</td>
                  <td>{item.cafe_name}</td>
                  <td>{item.address1}</td>
                  <td>{item.address2}</td>
                  <td>{item.address3}</td>
                  <td>{item.address4}</td>
                  <td>{item.longitude}</td>
                  <td>{item.latitude}</td>
                  <td>{Math.round(item.distance * 10) / 10}</td>
                  <button
                    onClick={() =>
                      setGeoCoord(item.address2, item.address3, item.cafe_id)
                    }
                  >
                    좌표넣기
                  </button>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CafeCoordManage
