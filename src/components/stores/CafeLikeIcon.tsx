//@ts-nocheck
import React, { useState } from 'react'
import { ReactComponent as LikeIcon } from './svg/heart-svgrepo-com.svg'
import { ReactComponent as FilLikeIcon } from './svg/fill-heart-svgrepo-com.svg'

const CafeLikeIcon = ({ index, item }) => {
  const [like, setLike] = useState(false)
  const [cafeId, setCafeId] = useState('')
  const session = sessionStorage.getItem("Id")
  const likeBtn = (checkthis) => {
    if (checkthis.id == 'cafe_1' && sessionStorage.getItem("Id") !== null) {
      setLike(!like)
    }
  }

  return (
    <div>
      {like ? (
        <FilLikeIcon onClick={(e) => likeBtn(e.target)} />
      ) : (
        <LikeIcon
          fill="#9F2042"
          className="checkbox"
          onClick={(e) => likeBtn(e.target)}
          id={'cafe_1'}
        />
      )}
    </div>
  )
}

export default CafeLikeIcon
