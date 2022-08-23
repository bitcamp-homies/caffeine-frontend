//@ts-nocheck
import { ReactComponent as InfoIcon } from './svg/info-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CafeLikeIcon from './CafeLikeIcon'

const CafeList = ({ filterData, setHoverCafe }) => {
  let DetailLink
  const session = sessionStorage.getItem('Id')

  const [check, setCheck] = useState([])
  const toggleLike = () => {
    if (session === null || session === '' || session === undefined) {
      Swal.fire({
        text: 'You must sign in to add this store to your favorites.',
        icon: 'warning',
        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
        confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
        cancelButtonColor: '#00754a', // cancel 버튼 색깔 지정
        confirmButtonText: 'Sign in', // confirm 버튼 텍스트 지정
        cancelButtonText: 'Cancel', // cancel 버튼 텍스트 지정

        reverseButtons: true, // 버튼 순서 거꾸로
      }).then((result) => {
        // 만약 Promise리턴을 받으면,
        if (result.isConfirmed) {
          // 만약 모달창에서 confirm 버튼을 눌렀다면

          Swal.fire('승인이 완료되었습니다.', '화끈하시네요~!', 'success')
        }
      })
    } else setLike(!like)
  }

  return (
    <ul className="h-[440px] w-full overflow-scroll overflow-x-hidden lg:w-[28rem] xl:w-[35rem]">
      {filterData.map((item, index) => {
        DetailLink = `/store/${item.cafe_name}`
        return (
          <li
            className="p-4 hover:bg-gray-100"
            key={index}
            onMouseOver={() => setHoverCafe(item)}
          >
            <div className="flex justify-around space-x-4">
              <div className="w-60">
                <div className="text-sm font-bold">{item.cafe_name}</div>
                <div className="text-xs">
                  {item.address2},{item.address3}
                </div>
              </div>
              <div>
                <button className="relative ml-6 h-4 w-4" onClick={toggleLike}>
                  <CafeLikeIcon index={index} item={item} />
                </button>

                <Link to={DetailLink}>
                  <button className="relative ml-6 h-4 w-4">
                    <InfoIcon fill="#dd9c4f" />
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
