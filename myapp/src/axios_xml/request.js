import axios from "axios";
import qs from 'qs';
import {getCookie} from "../utils/Auth";


const server = axios.create({
    //baseURL:"http://47.94.201.5",
    timeout:10000,
    //可以请求的时候携带本地的cookie发送到服务器
    //withCredentials: true,
})

server.interceptors.request.use((config)=>{
    if(config.method == "post"){
        config.data = qs.stringify(config.data);

    }else if(config.method == "get"){
        config.params = {...config.params}
    }
    config.headers["Content-type"] = "application/x-www-form-urlencoded";
    //每次请求的时候都需要携带Token
    //config.headers["X-Token"] = getCookie();!getCookie()?"":"getCookie().split("&")[0]"
    config.headers["X-Token"] = getCookie()?"":getCookie().split("&")[0]
    return config;
},(err)=>{
    return Promise.reject(err)
})

server.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err);
})

export default server;




