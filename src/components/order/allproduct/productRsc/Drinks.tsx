// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Drinks = ({ data, result }) => {
  const [test, setTest] = useState("")
  //웅비 로그인 세션값 넘겨주기
  const id = sessionStorage.getItem('Id')
  const userType = sessionStorage.getItem('UserType')
  const nickName = sessionStorage.getItem('NickName')
  const user_id = sessionStorage.getItem('User_id')
  
  useEffect(()=>{
    setTest(sessionStorage.getItem("Id"))
  },[])
  
  
  const loginCheck = (e) => {
    if (test == null) {
      alert('로그인시 제공되는 기능입니다.')
      e.preventDefault()
    }
  }
  return (
    <div className="grid w-auto grid-cols-1 gap-4 pt-5 text-xs md:grid-cols-2 md:text-sm">
      {data.map((item, idx) => (
        <Link
          to={`/order/featured/order-now/cafe/${item.cafe_id}/product/${item.product_id}`}
          state={{
            id: id,
            userType: userType,
            nickName: nickName,
            user_id: user_id,
          }}
        >
          <div
            className="flex h-20 flex-row items-center gap-3 bg-white md:h-28 "
            onClick={loginCheck}
          >
            <img
              className="h-20 w-20 rounded-full object-fill md:h-28 md:w-28"
              src={`https://storage.googleapis.com/bitcamp-caffeine.appspot.com${item.file_path}${item.img_file}`}
            ></img>
            <div className="items-left flex flex-col gap-1">
              <p>{item.product_name_kor}</p>
              <p>{item.product_name_eng}</p>
              <p>
                ₩ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Drinks
