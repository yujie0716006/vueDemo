import axios from "axios";

const request=axios.create({
  baseURL:dev.env.BASE_API,
  timeout:15000
})

// 请求拦截器
request.interceptors.request.use(config => {
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
