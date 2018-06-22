'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, _types.ECHARTS_CLICK, function (state, _ref) {
  var handleClick = _ref.handleClick;

  state.echarts.clickState = handleClick;
}); // mutations.js中的内容都是用来更改state的状态的值
//# sourceMappingURL=mutations.js.map