"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = _axios2.default.create({
  baseURL: dev.env.BASE_API,
  timeout: 15000
});

// 请求拦截器
request.interceptors.request.use(function (config) {
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
//# sourceMappingURL=server.js.map