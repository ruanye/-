import axios from "axios";

// 定义一个请求用的类 
class HttpClient {
    constructor() {
      // 定义一些默认值，① 请求地址
       this.baseURL  =  process.env.NODE_ENV==='development'?'https://64afdf2499b97caffab53192.hz-iframe-svc.simplelab.cn/':'线上服务器';
        // ② 定义默认超时时间
       this.timeout = 3000;

       this.queue = {};  //定义一个队列，用来存放请求
       
    }
    setInterceptors(instance,url){
        // 请求拦截器，请求之前
        instance.interceptors.request.use(config=>{
            this.queue[url] = url; // 把请求存放到队列里面  
            
            if (Object.keys(this.queue).length) {
                console.log('显示loading');
              }
            config.headers.authorization ='xxxxxyyyyytoken';
            return config
        },err=>Promise.reject(err))
        // 响应拦截器,把所有响应回来的数据统一进行处理 
        instance.interceptors.response.use(res=>{
           delete this.queue[url]; // 响应成功就把当前的 url 从队列中删除 
           if (Object.keys(this.queue).length==0) {
            console.log('关闭 loading');
          }
          return res.data
        },err=>Promise.reject(err))
    
    }
    merge(options){
       return {baseURL:this.baseURL,timeout:this.timeout,...options}
    }
    request(options) {
        const instance = axios.create(); // axios 自带的方法，用来创建一个 axios 实例   
        // 定义一个方法，用来合并默认参数和传递进来的参数
        const config = this.merge(options);
        // 设置拦截器 
        this.setInterceptors(instance, options.url);
        return instance(config)

    }

}

export default new HttpClient()

