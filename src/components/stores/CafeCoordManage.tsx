//@ts-nocheck

import axios from 'axios';
import React from 'react';

const CafeCoordManage = () => {

  const [data, setData] = React.useState([])
  const [longitude, setLongitude] = React.useState(0);
  const [latitude, setLatitude] = React.useState(0); 
  const [userLong, setUserLong] = React.useState(0);
  const [userLat, setUserLat] = React.useState(0);

  var geocoder = new window.kakao.maps.services.Geocoder();

  const getGeoCoord = (addr2, addr3) => {
    geocoder.addressSearch(`${addr2} ${addr3}`, function(result, status) {
      // 정상적으로 검색이 완료됐으면 
      if (status === window.kakao.maps.services.Status.OK) {
          setLongitude(result[0].x);
          setLatitude(result[0].y);
      }
    })

  }

  const getUserLocation = () => {
    console.log('user loc 집어넣기');

    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
          var lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도
          console.log('사용자 위치 : ',lon,lat);
          setUserLong(lon);
          setUserLat(lat);
      });
      
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      console.log('위치불러오기실패...!');
    }
  }

  const setGeoCoord = (addr2, addr3, cafe_id) => {
    
    geocoder.addressSearch(`${addr2} ${addr3}`, function(result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
          setLongitude(result[0].x);
          setLatitude(result[0].y);
          axios
          .get('http://localhost:8080/cafe/updateCoord',{
            params:{
              longitude : result[0].x, latitude : result[0].y, cafe_id : cafe_id
            }
          })
          .catch((err) => console.log(err));
      }
    })
    
  }
    
  const setGeoCoordAllCafe = (cafeList) => {
    for(var i = 0; i < cafeList.length; i++){
      setGeoCoord(cafeList[i].address2, cafeList[i].address3, cafeList[i].cafe_id);
    }
  }

  React.useEffect(() => {
    getUserLocation()

    axios
    .get('http://localhost:8080/cafe/listAlllWithCoord',{
      params:{
        userLong : userLong, userLat : userLat
      }
    })
    .then((res) => {setData(res.data)})
    .catch((err) => {console.log(err)})

  },[])
  
  return (
    <div>
      <div>현재좌표 경도longitude :  {longitude} 위도 latitude : {latitude}</div>
      <div>사용자위치 경도 : {userLong} 위도 : {userLat}</div>
      <div>
        <button onClick={() => setGeoCoordAllCafe(data)} className='bg-green-300 border-none text-center text-white text-semibold'>전체 카페 좌표 최신화</button>
      </div>
      <div>
        <table>
          <thead>
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
          {
            data.map((item, index) => {
              return (
                <tr className='border-t-2 border-green-200 text-center' key={index}>
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
                  <button onClick = {() => setGeoCoord(item.address2, item.address3, item.cafe_id)}>좌표넣기</button>
                </tr>
              )
            })
          }
          </tbody>       
        </table>
      </div>
    </div>
    
  );
};

export default CafeCoordManage;