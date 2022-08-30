//@ts-nocheck

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as MyLocationIcon } from './svg/navigate-circle-sharp-svgrepo-com.svg'

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
  const navigate = useNavigate()

  const setMarkerUserLocationOnMap = (userLocation, map) => {
    var locPosition = new window.kakao.maps.LatLng(
      userLocation.lat,
      userLocation.lon,
    )
    // kakao api는 위도 경도 순으로 입력해야하고, POINT TYPE은 경도 위도 순으로 입력해야해서 헷갈리기 쉽다
    var message =
      '<div class="w-[150px] h-9 text-center py-2 px-1 text-[16px] bg-[#3D1308] text-white font-bold">내 위치</div>' // 인포윈도우에 표시될 내용입니다

    displayMarker(locPosition, message, map)
  }

  const getDistance = (distance) => {
    if (distance < 1000) {
      return Math.round(distance) + 'm'
    } else {
      return Math.round(distance / 100) / 10 + 'km'
    }
  }

  const displayMarker = (locPosition, message, map) => {
    // 마커를 생성합니다
    var infowindow
    var imageSrc = '/img/current_location_maincolor.svg' // 마커이미지의 주소입니다
    var imageSize = new kakao.maps.Size(30, 30) // 마커이미지의 크기입니다
    // imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

    var marker = new window.kakao.maps.Marker({
      map: map,
      position: locPosition,
      draggable: true,
      image: markerImage,
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

    var imageSrc = '/img/map_dot_maincolor.svg' // 마커이미지의 주소입니다
    var imageSize = new kakao.maps.Size(18, 18) // 마커이미지의 크기입니다
    // imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

    var cafeMarker = new window.kakao.maps.Marker({
      map: map,
      position: coords,
      image: markerImage,
      clickable: true,
    })

    //cafe_name으로 title 설정해두고 marker click 했을 때 getTitle해서 title로 cafeList에서 focus 맞추기 + pin 모양변경시키기
    cafeMarker.setTitle(aCafeData.cafe_name)

    var hoverMarkerImage = new kakao.maps.MarkerImage(
      '/img/map_pin_maincolor.svg',
      new kakao.maps.Size(30, 30),
    )

    kakao.maps.event.addListener(cafeMarker, 'mouseover', function () {
      cafeMarker.setImage(hoverMarkerImage)
    })

    kakao.maps.event.addListener(cafeMarker, 'mouseout', function () {
      cafeMarker.setImage(markerImage)
    })

    kakao.maps.event.addListener(cafeMarker, 'click', function () {
      customOverlay.setMap(null)

      setHoverCafe(
        cafeList.find((item) => item.cafe_name === cafeMarker.getTitle()),
      )

      navigate(`/store/${aCafeData.cafe_name}`)
    })

    cafeMarkers = [...cafeMarkers, cafeMarker]
  }

  const setHoverCafeOverlay = (cafeData, map, fontSize) => {
    var coords = new window.kakao.maps.LatLng(
      cafeData.latitude,
      cafeData.longitude,
    )

    var content = `
      <div class='w-[150px] h-[40px] rounded-full text-center py-2 px-1 bg-none drop-shadow-lg mb-9 text-black font-semibold text-[${fontSize}px]'>
        ${cafeData.cafe_name}
        <span class='text-[#9F2042]'> 
          ${getDistance(cafeData.distance)}
        </span>
      </div>
    `

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
      draggable: true,
      scrollwheel: true,
      disableDoubleClick: false,
      disableDoubleClickZoom: false,
    }
    map = new window.kakao.maps.Map(container, options)
    const zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)
    // 맵 렌더링
  }, [  ])

  React.useEffect(() => {
    //풍혁0819 : 마커를 이동하게 된다면, 사용자의 위치가 업데이트 되고
    for (var i = 0; i < cafeMarkers.length; i++) {
      cafeMarkers[i].setVisible(false)
    }
    if (cafeList.length > 0) {
      for (var i = 0; i < cafeList.length; i++) {
        cafeLocPin(cafeList[i], map)
      }
    }
  }, [cafeList])

  React.useEffect(() => {
    if (userLocation.lon !== 0) {
      setMarkerUserLocationOnMap(userLocation, map)
    }
  }, [userLocation])

  React.useEffect(() => {
    customOverlay.setMap(null)
    if (hoverCafe.cafe_id === 0) {
      map.setCenter(
        new window.kakao.maps.LatLng(userLocation.lat, userLocation.lon),
      )
      map.setLevel(7, {
        animate: {
          duration: 500,
        },
      })
    }
    if (hoverCafe.cafe_id > 0) {
      setHoverCafeOverlay(hoverCafe, map, 16)
      map.setCenter(
        new window.kakao.maps.LatLng(hoverCafe.latitude, hoverCafe.longitude),
      )
      map.setLevel(4, {
        animate: {
          duration: 500,
        },
      })
    }
  }, [hoverCafe])

  const outerHeight = window.outerHeight;
  return (
    <div 
      id="map_wrap" 
      className={
        `h-[17rem] w-full lg:h-full`
      }>
      <div className={`static h-full w-full`} id="myMap">
        <button
          className="absolute top-[12rem] right-0 z-10 h-9 w-9 rounded-lg border-2 bg-white drop-shadow-lg lg:bottom-[17.5rem]"
          onClick={() => {
            map.setCenter(
              new window.kakao.maps.LatLng(userLocation.lat, userLocation.lon),
            )
          }}
        >
          <MyLocationIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  )
}

export default MapContainer
