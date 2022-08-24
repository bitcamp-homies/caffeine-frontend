// @ts-nocheck
import axios from "axios";
import { useMutation } from "react-query";

const api = axios.create({
    baseURL : 'http://localhost:8080'
})

export const listAllMybatis = () =>{
    const temp = api.get('/cafe/listAllMybatis');
    return temp;
}

export const cafeDistLocation = () =>{
    const temp = api.get('/cafe/cafeDistLocation');
    return temp;
}

export const NickNameCheck = (NickName) =>{
    const temp = api.get('/cafe/NickNameCheck',{
        params : {
            NickName : NickName
        }
    })
    return temp
}

export const EmailCheck = (Email) => {
    const temp = api.get('/cafe/EmailCheck',{
        params : {
            Email : Email
        }
    })
    return temp
}

export const createMember = (Member) =>{
    const temp = api.post('/cafe/createMember',Member)
}

export const Login = (login) =>{
    const temp = api.post('/cafe/Login',login)
    return temp
}
<<<<<<< HEAD
=======

export const getCafeProductList = (cafe_id) =>{
    const temp = api.get(`/order/getProduct/`,{
        params : {
            cafe_id : cafe_id
        }
    })
    return temp
}
>>>>>>> 60a5f0f09c1c1dc1d5a153fac326a0a44f5b3fc6
