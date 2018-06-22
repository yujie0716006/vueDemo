'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('./types');

exports.default = {
  //  调用修改首页折线图的状态
  echartsClick: function echartsClick(_ref, handleClick) {
    var commit = _ref.commit;

    commit(_types.ECHARTS_CLICK, { handleClick: handleClick });
  }
}; // action.js   这个js中的文件都是用来执行操作，来调用mutations简介改变状态了
//# sourceMappingURL=actions.js.map