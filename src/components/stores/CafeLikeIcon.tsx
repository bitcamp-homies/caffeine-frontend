//@ts-nocheck
import React, { useState } from 'react'
import { ReactComponent as LikeIcon } from './svg/heart-svgrepo-com.svg'
import { ReactComponent as FilLikeIcon } from './svg/fill-heart-svgrepo-com.svg'

const CafeLikeIcon = ({ index, item , likeList}) => {
  const [like, setLike] = useState(false)

  const likeBtn = (checkthis) => {
    if (checkthis.id === 'cafe_1' && sessionStorage.getItem("Id") !== null) {
      setLike(!like)
      
    }
    const cafe_1 = document.getElementById('cafe_1')
    cafe_1?.setAttribute('value',item.cafe_id)
    
    console.log(cafe_1)
    const cafe = cafe_1?.getAttribute('value')
    console.log(cafe)
    if(like == true){
      cafe_1?.setAttribute('check','0') //check 안됫을경우
    }else{
      cafe_1?.setAttribute('check','1') //check됫을경우
    }
    
    console.log("확인 :" + cafe_1?.getAttribute('check'))
  }

  return (
    <div>
      {like ? (
        <FilLikeIcon onClick={(e) => likeBtn(e.target)}/>
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
