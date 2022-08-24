//@ts-nocheck
import { ReactComponent as LikeIcon } from './svg/heart-svgrepo-com.svg'
import { ReactComponent as InfoIcon } from './svg/info-svgrepo-com.svg'
import { Link } from 'react-router-dom'

const CafeList = ({ filterData, setHoverCafe }) => {
  let DetailLink

  return (
    <ul className="h-[440px] w-full overflow-scroll overflow-x-hidden lg:w-[28rem]">
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
              </div>
              <div>
                <button className="relative ml-6 h-4 w-4">
                  <LikeIcon fill="#dd9c4f" />
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
