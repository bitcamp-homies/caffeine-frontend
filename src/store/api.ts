import axios from "axios";
import { useMutation } from "react-query";

const api = axios.create({
    baseURL : 'http://localhost:8080'
})

export const listAllMybatis = () =>{
    const temp = api.get('/cafe/listAllMybatis');
    return temp;
}

export const NickNameCheck = (NickName : string) =>{
    const temp = api.get('/cafe/NickNameCheck',{
        params : {
            NickName : NickName
        }
    })
    return temp
}

export const EmailCheck = (Eamil : string) => {
    const temp = api.get('/cafe/EmailCheck',{
        params : {
            Eamil : Eamil 
        }
    })
    return temp
}

export const createMember = (Member : []) =>{
    const temp = api.post('/cafe/createMember',Member)
}