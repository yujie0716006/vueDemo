"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = _axios2.default.create({
  baseURL: process.env.BASE_API,
  timeout: 15000
});

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 在每次发送请求前，会先执行这里面的逻辑
  // console.log('调用接口，经过的拦截器');
  return config;
}, function (error) {
  return _promise2.default.reject(error);
});

// 相应拦截器
request.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return _promise2.default.reject(error);
});

exports.default = {
  // 使用es 6 的简化写法
  get: function get(url, params) {
    return request({
      url: url,
      params: params,
      method: 'get'
    });
  }
};
//# sourceMappingURL=server.js.map