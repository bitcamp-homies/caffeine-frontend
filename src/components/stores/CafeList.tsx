//@ts-nocheck
import { ReactComponent as LikeIcon } from './svg/heart-svgrepo-com.svg'
import { ReactComponent as InfoIcon } from './svg/info-svgrepo-com.svg'
import { Link } from 'react-router-dom'

const CafeList = ({ cafeList, setHoverCafe }) => {
  let DetailLink

  return (
    <ul className="h-96 w-96 overflow-scroll overflow-x-hidden">
      {cafeList.map((item, index) => {
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
              <button className="h-4 w-4">
                <LikeIcon fill="#dd9c4f" />
              </button>
              <Link to={DetailLink}>
                <button className="h-4 w-4">
                  <InfoIcon fill="#dd9c4f" />
                </button>
              </Link>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default CafeList
