//@ts-nocheck
import { ReactComponent as LikeIcon } from './svg/heart-svgrepo-com.svg'
import { ReactComponent as InfoIcon } from './svg/info-svgrepo-com.svg'
import { ReactComponent as FilLikeIcon } from './svg/fill-heart-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CafeList = ({ filterData, setHoverCafe }) => {
  let DetailLink

  const [like, setLike] = useState(false)
  const toggleLike = () => {
    setLike(!like)
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
                  {like ? <LikeIcon fill="#dd9c4f" /> : <FilLikeIcon />}
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
