//@ts-nocheck

import axios from 'axios';
import React from 'react';


const CafeCoordManage = () => {
  const [data, setData] = React.useState([])
  const [longitude, setLongitude] = React.useState(0);
  const [latitude, setLatitude] = React.useState(0);

  var geocoder = new window.kakao.maps.services.Geocoder();

  const getGeoCoord = (addr2, addr3) => {
    geocoder.addressSearch(`${addr2} ${addr3}`, function(result, status) {
      // 정상적으로 검색이 완료됐으면 
      if (status === window.kakao.maps.services.Status.OK) {
          setLongitude(result[0].x);
          setLatitude(result[0].y);
      }
    });
  }
     

  axios
    .get('http://localhost:8080/cafe/listAlllWithCoord')
    .then((res) => {setData(res.data)})
    .catch((err) => {console.log(err)})

  return (
    <div>
      현재좌표 경도longitude :  {longitude} 위도 latitude : {latitude}
      <table>
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
          <th>좌표최신화</th>
        </tr>
        {
          data.map((item, index) => {
            return (
              <tr className='border-t-2 border-green-100' key={index}>
                <td>{item.cafe_id}</td>
                <td>{item.user_id}</td>
                <td>{item.cafe_name}</td>
                <td>{item.address1}</td>
                <td>{item.address2}</td>
                <td>{item.address3}</td>
                <td>{item.address4}</td>
                <td>{item.longitude}</td>
                <td>{item.latitude}</td>
                <button onClick = {() => getGeoCoord(item.address2, item.address3)}>{item.cafe_name}좌표넣기</button>
              </tr>
            )
          })
        }       
      </table>
    </div>
    
  );
};

export default CafeCoordManage;