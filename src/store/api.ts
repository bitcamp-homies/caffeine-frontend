// @ts-nocheck
import axios from 'axios'
import { useMutation } from 'react-query'

const api = axios.create({
  baseURL: 'http://localhost:8080',
})

export const listAllMybatis = () => {
  const temp = api.get('/cafe/listAllMybatis')
  return temp
}

export const listBoundary3000Mybatis = (userLong, userLat) => {
  const temp = api.get('/cafe/listBoundary3000Mybatis', {
    params: {
      userLong: userLong,
      userLat: userLat,
    },
  })
  return temp
}
export const cafeDistLocation = () => {
  const temp = api.get('/cafe/cafeDistLocation')
  return temp
}

export const NickNameCheck = (NickName) => {
  const temp = api.get('/cafe/NickNameCheck', {
    params: {
      NickName: NickName,
    },
  })
  return temp
}

export const EmailCheck = (Email) => {
  const temp = api.get('/cafe/EmailCheck', {
    params: {
      Email: Email,
    },
  })
  return temp
}

export const createMember = (Member) => {
  const temp = api.post('/cafe/createMember', Member)
}

export const Login = (login) => {
  const temp = api.post('/cafe/Login', login)
  return temp
}

export const getCafeitemList = (cafe_id) => {
    const temp = api.get('/cafe/getCafeitemList',{
        params : {
            cafe_id : cafe_id
        }
    })
    return temp
}

//카카오API
export const kakaoAPI = (productName, productCount, totalPrice) =>{
  const temp = axios.post({
    url: "https://kapi.kakao.com/v1/payment/ready",
    headers: {
      //카카오 dev에 등록한 admin Key 등록
      Authorization : "7d170046a599f182cb614154a7298d41",
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    params: {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: productName,
      quantity: productCount,
      total_amount: totalPrice,
      vat_amount: 0,
      tax_free_amount: 0,
      //성공
      approval_url: "http://localhost:3000/",
      //실패
      fail_url: "http://localhost:3000/",
      //취소
      cancel_url: "http://localhost:3000/",
    },
  })
  return temp
}