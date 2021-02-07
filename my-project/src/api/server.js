import axios from "axios";

const request = axios.create({
  // process.env值为开发环境development和生产环境production，打包不同走的环境不同，但是都是获取当前那个文件的路径
  baseURL: process.env.BASE_URL,
  timeout: 15000,
})

// 默认axios请求头中的Content-Type的默认值为application/json，也可以将请求头修改成下面的方式
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
request.interceptors.request.use(config => {
  // 在每次发送请求前，会先执行这里面的逻辑
  // console.log('调用接口，经过的拦截器');
  return config;
}, error => {
  return Promise.reject(error)
});

// 相应拦截器
request.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error)
});

export default {
// 使用es 6 的简化写法
  get(url, params) {
    return request({
      url,
      params,
      method: 'get'
    })
  },
  post(url, params) {
    return request({
      url,
      data: params,
      method: "post"
    })
  },
  delete(url, params) {
    return request({
      url,
      params,
      method: 'delete'
    })
  },
  put(url, params) {
    return request({
      url,
      data: params,
      method: 'put'
    })
  },
  uploadAxios(url, params) {
    const formData = new formData
    formData.append('file', params)
    return request({
      url,
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'},
      method: 'post'
    })
  }
}
