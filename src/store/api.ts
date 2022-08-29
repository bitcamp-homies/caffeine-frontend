// @ts-nocheck
import axios from 'axios'
import { useMutation } from 'react-query'

const api = axios.create({
  baseURL: `${process.env.REACT_APP_THUMBS_API_ADDRESS}`,
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

export const setMakeList = (email) => {
  const temp = api.post('/cafe/makeList', email)
}

export const getCafesMenusAll = (cafe_id) => {
  const temp = api.get('/cafe/getCafesMenusAll', {
    params: {
      cafe_id: cafe_id,
    },
  })
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

