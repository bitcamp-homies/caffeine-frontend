import React from 'react';

type searchPlaceType = {
  searchPlace : string
}

declare global {
  interface Window {
    kakao: any;
  }
}
const MapContainer = ({searchPlace} : searchPlaceType) => {
  
  React.useEffect(() => {
    const container = document.getElementById('myMap');
      const options = {
        center : new window.kakao.maps.LatLng(33.45701, 126.570667),
        level : 3
      }
    const map = new window.kakao.maps.Map(container, options);
    
    const ps = new window.kakao.maps.services.Places(); 

    ps.keywordSearch(searchPlace, placesSearchCB); 

    function placesSearchCB (data:any, status:any, pagination:any) {
      //일단 any로 두겠습니다. 
      console.log(data);    
      if (status === window.kakao.maps.services.Status.OK) {

            let bounds = new window.kakao.maps.LatLngBounds();
            
            for (let i=0; i<data.length; i++) {
                displayMarker(data[i]);    
                bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            }       

            map.setBounds(bounds);
        } 
    }

    function displayMarker(place:any) {
        let marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.y, place.x) 
        });

        let infowindow = new window.kakao.maps.InfoWindow({zIndex:1});

        // 마커에 클릭이벤트를 등록
        window.kakao.maps.event.addListener(marker, 'click', function() {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
          infowindow.open(map, marker);
        });
    }

  }, [searchPlace]);

  return (
    <div className='w-full h-[32rem]' id='myMap'>
      
    </div>
  );
};

export default MapContainer;