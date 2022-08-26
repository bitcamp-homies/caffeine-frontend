//@ts-nocheck
import { ReactComponent as InfoIcon } from './svg/info-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CafeLikeIcon from './CafeLikeIcon'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CafeList = ({ filterData, setHoverCafe }) => {
  let DetailLink
  const session = sessionStorage.getItem('Id')
  const navigate = useNavigate()
  const getDistance = (distance) => {
    if (distance < 1000) {
      return Math.round(distance) + 'm'
    } else {
      return Math.round(distance / 100) / 10 + 'km'
    }
  }
  const [likeList, setLikeList] = useState([])

  const toggleLike = () => {
    if (session === null || session === '' || session === undefined) {
      Swal.fire({
        text: 'You must sign in to add this store to your favorites.',
        icon: 'warning',
        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
        confirmButtonColor: '#9F2042', // confrim 버튼 색깔 지정
        cancelButtonColor: '#e18e96', // cancel 버튼 색깔 지정
        confirmButtonText: 'Sign in', // confirm 버튼 텍스트 지정
        cancelButtonText: 'Cancel', // cancel 버튼 텍스트 지정

        reverseButtons: true, // 버튼 순서 거꾸로
      }).then((result) => {
        // 만약 Promise리턴을 받으면,
        if (result.isConfirmed) {
          // 만약 모달창에서 confirm 버튼을 눌렀다면
          navigate('/login')
        }
      })
    } else if (session !== null || session !== '' || session !== undefined)
      setLike(!like)
  }

  const data = {
    'email' : session
  }
  const qs = require('qs');

  const getLikeList = () => {
    axios({
      method : 'post',
      url : 'http://localhost:8080/cafe/getLikeList',
      data : qs.stringify(data),
    })
      .then((res) => {
        setLikeList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (session !== null || session !== '' || session !== undefined) {
      getLikeList(JSON.stringify(session))
    }
  }, [])

  return (
    <ul className="h-[45rem] w-full overflow-scroll overflow-x-hidden lg:w-[28rem] xl:w-[35rem]">
      {filterData.map((item, index) => {
        DetailLink = `/store/${item.cafe_name}`
        return (
          <li
            className="p-4 hover:bg-gray-100"
            key={index}
            onMouseOver={() => setHoverCafe(item)}
            onMouseLeave={() =>
              setHoverCafe({
                cafe_id: 0,
                user_id: 0,
                cafe_name: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                longitude: 0,
                latitude: 0,
                distance: 0,
              })
            }
          >
            <div className="flex justify-around space-x-4">
              <div className="w-60">
                <div className="text-sm font-bold">{item.cafe_name}</div>
                <div className="text-xs">
                  {item.address2},{item.address3}
                </div>
                <div className="text-xs text-gray-500">
                  {getDistance(item.distance)} away
                </div>
              </div>
              <div>
                <button className="relative ml-6 h-4 w-4" onClick={toggleLike}>
                 {likeList !== '' && <CafeLikeIcon index={index} item={item} likeList={likeList}/>}
                </button>
                <Link to={DetailLink}>
                  <button className="relative ml-6 h-4 w-4">
                    <InfoIcon fill="#9F2042" />
                  </button>
                </Link>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default CafeList
