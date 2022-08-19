//@ts-nocheck

import React, { useEffect, useState } from 'react'

let map
let customOverlay = new kakao.maps.CustomOverlay({
  position: new window.kakao.maps.LatLng(37.54699, 127.09598),
  content: '',
})
var cafeMarkers = []

const MapContainer = ({
  userLocation,
  setUserLocation,
  cafeList,
  setCafeList,
  hoverCafe,
  setHoverCafe,
}) => {
  const setMarkerUserLocationOnMap = (userLocation, map) => {
    var locPosition = new window.kakao.maps.LatLng(
      userLocation.lat,
      userLocation.lon,
    )
    // kakao api는 위도 경도 순으로 입력해야하고, POINT TYPE은 경도 위도 순으로 입력해야해서 헷갈리기 쉽다
    var message =
      '<div class="w-[150px] h-9 text-center py-2 px-1 text-[16px] bg-blue-500 text-white font-bold">내 위치</div>' // 인포윈도우에 표시될 내용입니다

    displayMarker(locPosition, message, map)
  }

  const displayMarker = (locPosition, message, map) => {
    // 마커를 생성합니다
    var infowindow

    var marker = new window.kakao.maps.Marker({
      map: map,
      position: locPosition,
      draggable: true,
    })
    kakao.maps.event.addListener(marker, 'dragstart', function () {
      customOverlay.setMap(null)
      infowindow.close()
      marker.setVisible(false)
    })
    //marker가 drag 되었을 때 사용자 좌표 변경 시도..!
    kakao.maps.event.addListener(marker, 'dragend', function () {
      setUserLocation({
        lon: marker.getPosition().getLng(),
        lat: marker.getPosition().getLat(),
      })
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

  const cafeLocPin = (aCafeData, map) => {
    var coords = new window.kakao.maps.LatLng(
      aCafeData.latitude,
      aCafeData.longitude,
    )
    var marker = new window.kakao.maps.Marker({
      map: map,
      position: coords,
    })

    cafeMarkers = [...cafeMarkers, marker]
  }

  const setHoverCafeOverlay = (cafeData, map) => {
    var coords = new window.kakao.maps.LatLng(
      cafeData.latitude,
      cafeData.longitude,
    )
    
    console.log('cafeData 이미지 경로 뽑아보기   : ', cafeData.file_path );
    // const profile =
    //   'https://storage.cloud.google.com/bitcamp-caffeine.appspot.com' +
    //   cafeData.file_path +
    //   cafeData.img_file.split(',').splice(-1, 1);
    // <span>
    //   <img src=${profile} alt="cafeProfile"/>
    // </span>
   
    var content = `
      <div class='w-[150px] h-[40px] rounded-full text-center py-2 px-1 bg-green-500 border-none  mb-9 text-white font-semibold text-[12px]'>
        ${cafeData.cafe_name}
      </div>
    `;

    customOverlay = new kakao.maps.CustomOverlay({
      position: coords,
      content: content,
    })

    customOverlay.setMap(map)
  }

  React.useEffect(() => {
    // map 렌더링
    const container = document.getElementById('myMap')
    const options = {
      center: new window.kakao.maps.LatLng(37.4923615, 127.0292881),
      level: 7,
    }
    map = new window.kakao.maps.Map(container, options)
    // 맵 렌더링
  }, [])

  React.useEffect(() => {
    //풍혁0819 : 마커를 이동하게 된다면, 사용자의 위치가 업데이트 되고
    for (var i = 0; i < cafeMarkers.length; i++) {
      cafeMarkers[i].setVisible(false)
    }
    console.log('MapContainer...cafeMarkers before...' + cafeMarkers.length)
    if (cafeList.length > 0) {
      for (var i = 0; i < cafeList.length; i++) {
        cafeLocPin(cafeList[i], map)
      }
    }
    console.log('MapContainer...cafeMarkers after...' + cafeMarkers.length)
  }, [cafeList])

  React.useEffect(() => {
    if (userLocation.lon !== 0) {
      setMarkerUserLocationOnMap(userLocation, map)
    }
  }, [userLocation])

  React.useEffect(() => {
    customOverlay.setMap(null)
    if(hoverCafe.cafe_id > 0){
      setHoverCafeOverlay(hoverCafe, map)
    }
  }, [hoverCafe])

  return <div className="h-[17rem] w-full lg:h-[32rem]" id="myMap"></div>
}

export default MapContainer
