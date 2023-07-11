import HttpClient from "@/util/HttpClient"

// 轮播图请求
 export const getBanner = ()=>{
    return HttpClient.request({
        url:'/mock/playList/banner',
        method:'get'
    })
 }





