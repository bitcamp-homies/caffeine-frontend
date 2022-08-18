//@ts-nocheck

import React from 'react'

let map
let customOverlay = new kakao.maps.CustomOverlay({
  position: new window.kakao.maps.LatLng(37.54699, 127.09598),
  content: '',
})


const insertUserLocation = (setUserLocation, fnc1) => {
  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude // 경도
      console.log('MapContainer...insertUserLocation....사용자 위치 : ', lon, lat)
      setUserLocation({ lon: lon, lat: lat })
      fnc1();
    })
  } else {
    // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    console.log('MapContainer...insertUserLocation....위치불러오기실패...!')
  }
}

const setHoverCafeOverlay = (cafeData, map) => {
  // for (var i = 0; i < customOverLaies.length; i++) {
  //   customOverLaies[i].setMap(null)
  // }

  // customOverLaies = [];
  
  console.log('MapCotainer...cafe 정보 : ', cafeData.cafe_name)
  var coords = new window.kakao.maps.LatLng(cafeData.latitude, cafeData.longitude);
  var content = `<div class='w-[150px] h-[40px] rounded-full text-center py-2 px-1 bg-green-500 border-none  mb-9 text-white font-semibold text-[12px]'>${cafeData.cafe_name}</div>`
  
  customOverlay = new kakao.maps.CustomOverlay({
    position: coords,
    content: content,
  })

  customOverlay.setMap(map);
  
  // customOverLaies.push(customOverlay)
  // for (var i = 0; i < customOverLaies.length; i++) {
  //   customOverLaies[i].setMap(map)
  // }
  
}

const cafeLocPin = (aCafeData, map) => {
  var coords = new window.kakao.maps.LatLng(aCafeData.latitude, aCafeData.longitude);
  var marker = new window.kakao.maps.Marker({
    map: map,
    position: coords,
  })
};

const MapContainer = (
  {userLocation, setUserLocation, cafeList, setCafeList, hoverCafe, setHoverCafe}
 ) => {
  
  console.log('MapContainter... props 확인...', userLocation);
  const setMarkerUserLocationOnMap = (map) => {
    console.log('Map Container... setMarkerUserLocationOnMap... userLocation : ', userLocation.lon, userLocation,lat);
    var locPosition = new window.kakao.maps.LatLng(
      userLocation.lat,
      userLocation.lon
    ) 
    // kakao api는 위도 경도 순으로 입력해야하고, POINT TYPE은 경도 위도 순으로 입력해야해서 헷갈리기 쉽다
    var message =
      '<div class="w-[150px] h-9 text-center py-2 px-1 text-[16px] bg-blue-500 text-white font-bold">내 위치</div>' // 인포윈도우에 표시될 내용입니다

    displayMarker(locPosition, message, map);
  }

  const displayMarker = (locPosition, message, map) => {
    // 마커를 생성합니다
    var marker = new window.kakao.maps.Marker({
      map: map,
      position: locPosition,
    })

    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true

      // 인포윈도우를 생성합니다
      var infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      })

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker)

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition)
  }


  React.useEffect(() => {
    insertUserLocation(setUserLocation, setMarkerUserLocationOnMap(map));
    
    // map 렌더링
    const container = document.getElementById('myMap')
    const options = {
      center: new window.kakao.maps.LatLng(37.4923615, 127.0292881),
      level: 7,
    }
    map = new window.kakao.maps.Map(container, options)
    // 맵 렌더링

    // 사용자 위치 map에 marker, infowindow 생성하기
    // setMarkerUserLocationOnMap(map);
    
    // 사용자 위치 map에 marker, infowindow 생성하기
 
    // for (var i = 0; i < cafeList.length; i++) {
    //   cafeLocPin(cafeList[i], map)
    // }

  }, [])

  // React.useEffect(() => {
  //   setHoverCafeOverlay(hoverCafe, map)
  // }, [hoverCafe])

  return <div className="h-[32rem] w-full" id="myMap"></div>
}

export default MapContainer
