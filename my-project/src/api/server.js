import axios from "axios";

const request=axios.create({
  baseURL:process.env.BASE_API,
  timeout:15000,
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 在每次发送请求前，会先执行这里面的逻辑
  // console.log('调用接口，经过的拦截器');
  return config;
},error => {
  return Promise.reject(error)
});

// 相应拦截器
request.interceptors.response.use(response => {
  return response;
},error => {
  return Promise.reject(error)
});

export default {
// 使用es 6 的简化写法
  get(url,params){
    return request({
      url,
      params,
      method:'get'
    })
  }
}
