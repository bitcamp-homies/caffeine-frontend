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
      .get('http://localhost:8080/cafe/listAlllWithCoord', {
        params: {
          userLong: userLocation.lon,
          userLat: userLocation.lat
        },
      })
      .then((res) => {
        setCafeList(res.data); 
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //풍혁 0818 : userLocation이랑 cafeList 초기화시켜주기
  useEffect(() => {
    getCafeList(userLocation);
  }, [])

  return (
    <div className="ml-4 flex flex-row">
      <div className="h-128 flex w-96 flex-col">
        {cafename === undefined ? (
          <SearchPlace 
            setPlace={setPlace} 
            setHoverCafe={setHoverCafe} 
            cafeList={cafeList}
            setCafeList = {setCafeList}
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
