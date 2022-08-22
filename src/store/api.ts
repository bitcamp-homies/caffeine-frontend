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

export const getCafeProductList = (cafe_id, product_id) => {
    const temp = api.get(`/order/featured/order-now/cafe/${cafe_id}/product/${product_id}`,{
        params:{
            cafe_id:cafe_id
        }
    })
    return temp
}