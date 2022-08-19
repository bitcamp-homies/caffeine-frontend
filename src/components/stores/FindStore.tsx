//@ts-nocheck

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CafeDetail from './CafeDetail'
import MapContainer from './MapContainer'

import SearchPlace from './SearchPlace'

  const FindStore = () => {
  const { cafename } = useParams();
  const [place, setPlace] = useState('');
  const [userLocation, setUserLocation] = useState({ lon: 0, lat: 0 });
  const [cafeList, setCafeList] = useState([]);
  const [hoverCafe, setHoverCafe] = useState(
    {
      "cafe_id": 0,
      "user_id": 0,
      "cafe_name": "",
      "address1": "",
      "address2": "",
      "address3": "",
      "address4": "",
      "longitude": 0,
      "latitude": 0,
      "distance": 0
    }
  );

  const getCafeList = (userLocation) => {
    axios
      .get('http://localhost:8080/cafe/listBoundary3000Mybatis', {
        params: {
          userLong: userLocation.lon,
          userLat: userLocation.lat
        },
      })
      .then((res) => {
        console.log('FindStore... 3000m 반경이내의 카페...', res.data);
        setCafeList(res.data); 
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const insertUserLocationAndGetCafeList = () => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude // 경도
        console.log('FindStore...insertUserLocation....사용자 위치 : ', lon, lat)
        setUserLocation({ lon: lon, lat: lat })
        getCafeList({ lon: lon, lat: lat });
      })
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      console.log('FindStore...insertUserLocation....위치불러오기실패...!')
    }
  }

  //풍혁 0818 : userLocation이랑 cafeList 초기화시켜주기
  useEffect(() => {
    insertUserLocationAndGetCafeList();
  }, [])

  useEffect(() => {
    if(userLocation.lon !== 0){
      getCafeList(userLocation)
    }
  }, [userLocation])

  return (
    <div className="ml-4 flex flex-row mt-5">
      <div className="h-128 flex w-96 flex-col">
        <div>사용자 위치 경도 {userLocation.lon} 위도 : {userLocation.lat} </div>
        {cafename === undefined ? (
          <SearchPlace 
            setPlace={setPlace} 
            setHoverCafe={setHoverCafe} 
            cafeList={cafeList}
          />
        ) : (
          <CafeDetail />
        )}
      </div>
      <div className="flex h-full w-full items-stretch">
        <MapContainer 
          searchPlace={place}
          userLocation = {userLocation} 
          setUserLocation={setUserLocation} 
          cafeList={cafeList}
          setCafeList={setCafeList} 
          hoverCafe = {hoverCafe}
          setHoverCafe = {setHoverCafe}
        />
      </div>
    </div>
  )
}

export default FindStore
