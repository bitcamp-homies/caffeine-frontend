import React from 'react';
import { useSelector } from 'react-redux';
import cafeDataTemp from './cafe_gangnam';

//주소로 좌표받아서 map에 pin박기 >> 반복문 돌려서 넘어온 카페들 전부 핀 박아버리기 >> 추후엔 반경 3km 기준으로 데이터를 받아와서 redux state에서 저장시킬것

// 커스텀 오버레이에 표시할 내용입니다     
// HTML 문자열 또는 Dom Element 입니다 


const hoverPin = (addr2, addr3, map) => {
  
  var geocoder = new window.kakao.maps.services.Geocoder();

  geocoder.addressSearch(`${addr2} ${addr3}`, function(result, status) {

    // 정상적으로 검색이 완료됐으면 
     if (status === window.kakao.maps.services.Status.OK) {

        var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        console.log(`변경된좌표 : ${result[0].y}, ${result[0].x}`);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var content = `<div class='w-[150px] text-center py-2 px-1 bg-none border-green-500 border-2'></div>`;

        // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
            position: coords,
            content: content   
        });

        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);
    } 
  });    

}
  
const MapContainer = () => {
    
  // 풍혁0812 : user 현재위치 얻어오기
  // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
  const addr2 = useSelector((state) => {
    return state.mainMarkerReducer.address2;
  })
  
  const addr3 = useSelector((state) => {
    return state.mainMarkerReducer.address3;
  })


  const cafeLocPin = (aCafeData, map) => {
  
    var geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(`${aCafeData.address2} ${aCafeData.address3}`, function(result, status) {
  
      // 정상적으로 검색이 완료됐으면 
       if (status === window.kakao.maps.services.Status.OK) {
  
          var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
  
          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new window.kakao.maps.Marker({
              map: map,
              position: coords
          });
  
          // 인포윈도우로 장소에 대한 설명을 표시합니다
          
          var infowindow = new window.kakao.maps.InfoWindow({
              content: `<div class='w-[150px] text-center py-2 px-1 text-[10px] bg-white text-black'>${aCafeData.cafe_name}</div>`,
              removable : true,
          });
          
          infowindow.open(map, marker);
  
      } 
  });    
  
  }
  const mainMarkerId = useSelector( (state) => {
    return state.mainMarkerReducer.mainMarkerId;
  })
  
  // React.useEffect(() => {
    
  // },[addr2, addr3])
    
  React.useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center : new window.kakao.maps.LatLng(35.4923615 , 127.0292881),
      level : 7
    };
    const map = new window.kakao.maps.Map(container, options);
      
    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    
    if (navigator.geolocation) {
      
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
          
          var lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도
          console.log('사용자 위치 : ', lat, lon);

          var locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
              message = '<div class="w-[150px] h-9 text-center py-2 px-1 text-[16px] bg-blue-500 text-white font-bold">내 위치</div>'; // 인포윈도우에 표시될 내용입니다
          
          // 마커와 인포윈도우를 표시합니다
          displayMarker(locPosition, message);
              
        });
      
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      console.log('위치불러오기실패...!')
      var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),    
          message = 'geolocation을 사용할수 없어요..'
          
      displayMarker(locPosition, message);
    }

    function displayMarker(locPosition, message) {

      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({  
          map: map, 
          position: locPosition
      }); 
      
      var iwContent = message, // 인포윈도우에 표시할 내용
          iwRemoveable = true;
  
      // 인포윈도우를 생성합니다
      var infowindow = new window.kakao.maps.InfoWindow({
          content : iwContent,
          removable : iwRemoveable
      });
      
      // 인포윈도우를 마커위에 표시합니다 
      infowindow.open(map, marker);
      
      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);      
  }
  
  for(var i = 0; i < cafeDataTemp.length; i++){
    cafeLocPin(cafeDataTemp[i],map, mainMarkerId);
  }
  
  }, [])
  
  return (
    <div className='w-full h-[32rem]' id='myMap'>
      
    </div>
  );
};

export default MapContainer;