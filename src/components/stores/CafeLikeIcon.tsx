//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { ReactComponent as LikeIcon } from './svg/heart-svgrepo-com.svg'
import { ReactComponent as FilLikeIcon } from './svg/fill-heart-svgrepo-com.svg'
import axios from 'axios'

const CafeLikeIcon = ({ index, item , likeList}) => {
  const [like, setLike] = useState(false)

  const cafe_check = document.getElementById('cafe_check')
  cafe_check?.setAttribute('value',item.cafe_id)
  const cafe = cafe_check?.getAttribute('value')
  //console.log(cafe_check)
  //console.log(cafe)
  
  if(like == true){
    cafe_check?.setAttribute('check','0') //check 안됫을경우
  }else{
    cafe_check?.setAttribute('check','1') //check됫을경우
  }
  console.log("확인 :" + cafe_check?.getAttribute('check'))

  const likeBtn = (checkthis) => {
    if (checkthis.id === 'cafe_check' && sessionStorage.getItem("Id") !== null) {
      setLike(!like)
      if(cafe_check?.getAttribute('check') == 1){
        console.log("cafe update:" + cafe)
      }else if(cafe_check?.getAttribute('check') == 0){
        console.log("cafe delete:" + cafe)
      }
    }
  }

  useEffect(() => {
    {
      likeList.map((list, index) => {
        return(
          <div>
          {
            list.cafe_id === item.cafe_id && like ? setLike(true) : setLike(false)
          }
          </div>
        )
      })
    }
  })

  return (
    <div>
      {like ? (
        <FilLikeIcon onClick={(e) => likeBtn(e.target)}/>
      ) : (
        <LikeIcon
          fill="#9F2042"
          className="checkbox"
          onClick={(e) => likeBtn(e.target)}
          id={'cafe_check'}
        />
      )}
    </div>
  )
}

export default CafeLikeIcon
