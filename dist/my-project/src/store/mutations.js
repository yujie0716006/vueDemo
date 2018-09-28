'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ECHARTS_CLICK$THEME_; // mutations.js中的内容都是用来更改state的状态的值


var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_ECHARTS_CLICK$THEME_ = {}, (0, _defineProperty3.default)(_ECHARTS_CLICK$THEME_, _types.ECHARTS_CLICK, function (state, _ref) {
  var handleClick = _ref.handleClick;

  state.echarts.clickState = handleClick;
}), (0, _defineProperty3.default)(_ECHARTS_CLICK$THEME_, _types.THEME_LAYOUT, function (state, _ref2) {
  var layoutPosition = _ref2.layoutPosition;

  state.navMenuPosition = layoutPosition;
}), (0, _defineProperty3.default)(_ECHARTS_CLICK$THEME_, _types.MENU_CLOSE_OPEN, function (state, _ref3) {
  var isCollapse = _ref3.isCollapse;

  state.isCollapse = isCollapse;
}), (0, _defineProperty3.default)(_ECHARTS_CLICK$THEME_, _types.SET_LANGUAGE, function (state, languageValue) {
  state.language = languageValue;
}), _ECHARTS_CLICK$THEME_);
//# sourceMappingURL=mutations.js.map