//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { ReactComponent as LikeIcon } from './svg/heart-svgrepo-com.svg'
import { ReactComponent as FilLikeIcon } from './svg/fill-heart-svgrepo-com.svg'

const CafeLikeIcon = ({ index, item, likeList }) => {
  const [like, setLike] = useState(false)
  const [cafeId, setCafeId] = useState('')
  const session = sessionStorage.getItem("Id")

  const likeBtn = (checkthis) => {
    if (checkthis.id === 'cafe_1' && session !== null) {
      setLike(!like)
    }
    const cafe_1 = document.getElementById('cafe_1')
    cafe_1?.setAttribute('value',item.cafe_id)
    const cafe = cafe_1?.getAttribute('value')
    console.log(cafe)
    if(like == true){
      cafe_1?.setAttribute('check','0') //check 안됫을경우
  
  }else if(like == false){
      cafe_1?.setAttribute('check','1') //check 안됫을경우
  }
    console.log("확인 :" + cafe_1?.getAttribute('check'))
  }

  useEffect(() => {
    localStorage.setItem('likeList',JSON.stringify(likeList))
  }, [])

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
