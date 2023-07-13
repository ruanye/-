import HttpClient from "@/util/HttpClient"

// 轮播图请求
 export const getBanner = ()=>{
    return HttpClient.request({
        url:'/mock/playList/banner',
        method:'get'
    })
 }



 // 登录请求 
 export const Login =({account,password})=>{
     return HttpClient.request({
        url:'/mock/login/account',
        method:'post',
        data:{
            account,
            password
        }

     })
 }





