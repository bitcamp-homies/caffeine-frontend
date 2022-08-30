// @ts-nocheck
import axios from 'axios'
import { useMutation } from 'react-query'
const api = axios.create({
  baseURL: process.env.REACT_APP_THUMBS_API_ADDRESS,
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

export const UserCheck = (Email) => {
  const temp = api.get('/cafe/UserCheck', {
    params: {
      
      Email: Email,

    },
  })
  return temp
}

export const createMember = (Member) => {
  const temp = api.post('/cafe/createMember', Member)
}

export const updateMember = (Member) => {
  const temp = api.post('/cafe/updateMember', Member)
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

export const getProductInfo = (product_id) => {
  const temp = api.get('/order/getProductInfo',{
    params : {
      product_id : product_id
    }
  })
  return temp
}

export const savePaymentList = (paymentList) => {
  const temp = api.post('/order/paymentList', paymentList)
  return temp
}

export const getMember = (Id) => {
  const temp = api.post('/cafe/getMember',Id)
  return temp
}
export const InsertProfileimg = (profile) => {
  const temp = api.post('/cafe/InsertProfileimg',profile)
  return temp
}

export const selectProfileimg = (user_id) => {
  const temp = api.post('/cafe/selectProfileimg',user_id)
  return temp
}

export const updateProfileimg = (user_id) => {
  const temp = api.post('/cafe/updateProfileimg',user_id)
} 

//카카오API
export const kakaoAPI = (productName, productCount, totalPrice ) =>{
  axios.post({
    url: "https://kapi.kakao.com/v1/payment/ready",
    headers: {
      //카카오 dev에 등록한 admin Key 등록
      Authorization : "KaKaoAK 7d170046a599f182cb614154a7298d41",
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
  }).then((response) => {
    const {
      data: {next_redirect_pc_url, tid}
    } = response;
    console.log(next_redirect_pc_url);
    console.log(tid);
    window.localStorage.setItem("tid",tid);
    window.localStorage.setItem("next_redirect_pc_url",next_redirect_pc_url);
  });
}

export const getcafes = (user_id) => {
  const temp = api.post('/cafe/getcafes',user_id)
  return temp
} 

export const getcafefics = (cafe_id) => {
  const temp = api.post('/cafe/getcafefics',cafe_id)
  return temp
}


export const getcafeficsprofile = (cafe_id) => {
  const temp = api.post('/cafe/getcafeficsprofile',cafe_id)
  return temp
}

export const insertCafepics = (cafe_id) => {
  const temp = api.post('/cafe/insertCafepics',cafe_id)
}

export const updateCafepics = (cafe_id) => {
  const temp = api.post('/cafe/updateCafepics',cafe_id)
}

export const insertcafes_product_list = (productdata) => {
  const temp = api.post('/cafe/insertcafes_product_list',productdata)
  return temp
}

export const insertproducts = (productdata) => {
  const temp = api.post('/cafe/insertproducts',productdata)
  return temp
}

export const insertcafes_product_list_items = (item) => {
  const temp = api.post('/cafe/insertcafes_product_list_items',item)
}

export const insertproducts_img = (item) => {
  const temp = api.post('/cafe/insertproducts_img',item)
}

