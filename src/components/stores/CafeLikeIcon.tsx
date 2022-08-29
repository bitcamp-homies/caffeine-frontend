//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { ReactComponent as LikeIcon } from './svg/heart-svgrepo-com.svg'
import { ReactComponent as FilLikeIcon } from './svg/fill-heart-svgrepo-com.svg'
import axios from 'axios'

const CafeLikeIcon = ({ index, item , likeList}) => {
  const session = sessionStorage.getItem('Id')
  const [like, setLike] = useState(false)
  const [cafe, setCafe] = useState()
  const [cafeId, setCafeId] = useState('')

  const likeBtn = (checkthis) => {
    const cafe_check = document.getElementById('cafe_check')
    cafe_check?.setAttribute('value',item.cafe_id)
    const cafe = cafe_check?.getAttribute('value')
    
    if(like == true){
      cafe_check?.setAttribute('check','0') //check 안됫을경우
    }else{
      cafe_check?.setAttribute('check','1') //check됫을경우
    }
    console.log("확인 :" + cafe_check?.getAttribute('check'))

    if (cafe !== 0 && checkthis.id === 'cafe_check' && sessionStorage.getItem("Id") !== null) {
      setLike(!like)
      if(cafe_check?.getAttribute('check') == 1){
        console.log("cafe update:" + cafe)
        setCafe(cafe)
        updateLikeList(JSON.stringify(data))
      }else if(cafe_check?.getAttribute('check') == 0){
        console.log("cafe delete:" + cafe)
        deleteLikeList(JSON.stringify(data))
      }
    }
  }

  const data = {
    'cafe_id' : cafe,
    'email' : session
  }
  const qs = require('qs');

  const updateLikeList = () => {
    axios({
      method : 'post',
      url : `${process.env.REACT_APP_THUMBS_API_ADDRESS}/cafe/updateLikeList`,
      data : qs.stringify(data),
    })
      .then((res) => {
        console.log('update 성공')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteLikeList = () => {
    axios({
      method : 'post',
      url : `${process.env.REACT_APP_THUMBS_API_ADDRESS}/cafe/deleteLikeList`,
      data : qs.stringify(data),
    })
      .then((res) => {
        console.log('delete 성공')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(()=>{
    likeList.map((list)=> {
      setCafeId(list.cafe_id)
      setLike(!like)
      }
    )
  },[])

  return (
    <div>
      { like && cafeId == item.cafe_id
      ? (
        <FilLikeIcon className={item.cafe_id} onClick={(e) => likeBtn(e.target)}/>
      ) : (
        <LikeIcon
          fill="#9F2042"
          className={item.cafe_id}
          onClick={(e) => likeBtn(e.target)}
          id={'cafe_check'}
        />
      )}
      
    </div>
  )
}

export default CafeLikeIcon
