//@ts-nocheck
import React from 'react'

const CafeListTable = ({
  listFilter,
  filteredData,
  setGeoCoord,
  updateCafeinfo,
}) => {
  return (
    <table className="w-[80rem]">
      <thead className="sticky top-0 z-10 bg-[#F8E5EE]">
        <tr className="h-16">
          <th>CAFE_ID</th>
          <th>USER_ID</th>
          <th>CAFE_NAME</th>
          {listFilter.filter === '주소' && <th>ADDRESS1</th>}
          {listFilter.filter === '주소' && <th>ADDRESS2</th>}
          {listFilter.filter === '주소' && <th>ADDRESS3</th>}
          {listFilter.filter === '주소' && <th>ADDRESS4</th>}
          {listFilter.filter === '경위도좌표' && <th>경도 </th>}
          {listFilter.filter === '경위도좌표' && <th>위도 </th>}
          {listFilter.filter === '경위도좌표' && <th>사용자와 거리:m</th>}
          {listFilter.filter === '경위도좌표' && <th>좌표최신화</th>}
          {listFilter.filter === '카페정보' && <th>영업시작</th>}
          {listFilter.filter === '카페정보' && <th>영업종료</th>}
          {listFilter.filter === '카페정보' && <th>애견동반가능</th>}
          {listFilter.filter === '카페정보' && <th>주차가능</th>}
          {listFilter.filter === '카페정보' && <th>카페정보랜덤</th>}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => {
          return (
            <tr
              className="h-12 border-b-[1px] border-b-[#9F2042] text-center hover:bg-gray-100"
              key={index}
            >
              <td>{item.cafe_id}</td>
              <td>{item.user_id}</td>
              <td>{item.cafe_name}</td>
              {listFilter.filter === '주소' && <td>{item.address1}</td>}
              {listFilter.filter === '주소' && <td>{item.address2}</td>}
              {listFilter.filter === '주소' && <td>{item.address3}</td>}
              {listFilter.filter === '주소' && <td>{item.address4}</td>}
              {listFilter.filter === '경위도좌표' && <td>{item.longitude}</td>}
              {listFilter.filter === '경위도좌표' && <td>{item.latitude}</td>}
              {listFilter.filter === '경위도좌표' && (
                <td>{Math.round(item.distance * 10) / 10}</td>
              )}
              {listFilter.filter === '경위도좌표' && (
                <td>
                  <button
                    onClick={() =>
                      setGeoCoord(item.address2, item.address3, item.cafe_id)
                    }
                    className="text-semibold w-20 rounded-lg border-none bg-[#9F2042] text-center text-white drop-shadow-lg hover:bg-[#3D1308]"
                  >
                    좌표넣기
                  </button>
                </td>
              )}
              {listFilter.filter === '카페정보' && <td>{item.opentime}</td>}
              {listFilter.filter === '카페정보' && <td>{item.closetime}</td>}
              {listFilter.filter === '카페정보' && <td>{item.pet}</td>}
              {listFilter.filter === '카페정보' && <td>{item.parking}</td>}
              {listFilter.filter === '카페정보' && (
                <td>
                  <button
                    onClick={() => updateCafeinfo(item.cafe_id)}
                    className="text-semibold w-24 rounded-lg border-none bg-[#9F2042] text-center text-white drop-shadow-lg hover:bg-[#3D1308]"
                  >
                    랜덤정보삽입
                  </button>
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default CafeListTable
