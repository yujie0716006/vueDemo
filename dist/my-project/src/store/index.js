'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

var _getters = require('./getters');

var _getters2 = _interopRequireDefault(_getters);

var _routerTags = require('./modules/routerTags');

var _routerTags2 = _interopRequireDefault(_routerTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);
var state = {
  isCollapse: false,
  // isCollapse:!!localStorage.getItem('menuButton') ? !!localStorage.getItem('menuButton') : false,   // 左侧树展开关闭的按钮
  echarts: { // 首页中的折线图
    clickState: "newVisits",
    "newVisits": {
      first: [150, 220, 500, 776, 940, 438, 326],
      last: [365, 452, 564, 422, 422, 785, 746]
    },
    "messages": {
      first: [202, 123, 500, 764, 452, 872, 245],
      last: [557, 245, 785, 435, 534, 756, 412]
    },
    "purchases": {
      first: [365, 452, 564, 422, 422, 785, 746],
      last: [557, 245, 785, 435, 534, 756, 412]
    },
    "shoppings": {
      first: [365, 452, 564, 422, 422, 785, 746],
      last: [150, 220, 500, 776, 940, 438, 326]
    }
  },
  scrollDis: null, // 页面滚动的距离
  navMenuPosition: 'left'
  // navMenuPosition:localStorage.getItem('layoutTheme') ? localStorage.getItem('layoutTheme') : 'left',   // 默认的导航条的位置在

};

exports.default = new _vuex2.default.Store({
  modules: {
    routerTags: _routerTags2.default
  },
  state: state,
  actions: _actions2.default,
  mutations: _mutations2.default,
  getters: _getters2.default
});
//# sourceMappingURL=index.js.map