//@ts-nocheck
import axios from "axios";

let userLong, userLat;

if (navigator.geolocation) {
  //여기서 navigator를 쓸 수 있을까유 >> 못쓰는듯 .. 
  navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
      console.log('redux에서 사용하는 사용자 위치 : ',lon,lat);
      userLong = lon;
      userLat = lat;
  });
  
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
  console.log('위치불러오기실패...!');
}

let initialState;

axios.get('http://localhost:8080/cafe/listAlllWithCoord',{
  params:{
    userLong : userLong, userLat : userLat
  }
})
.then((res) => {initialState = res.data})
.catch((err) => {console.log(err)})

const cafeListBoundaryReducer = (state = initialState, action) => {
  return state;
}

export default cafeListBoundaryReducer;