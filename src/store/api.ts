import axios from "axios";

const api = axios.create({
    baseURL : 'http://localhost:8080'
})

export const listAllMybatis = () =>{
    const temp = api.get('/cafe/listAllMybatis');
    return temp;
}

