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
  },


  //  修改主题的布局
  changeTheme: function changeTheme(_ref2, layoutPosition) {
    var commit = _ref2.commit;

    commit(_types.THEME_LAYOUT, { layoutPosition: layoutPosition });
  },

  //  左侧树的收缩与展示
  menuOpenClose: function menuOpenClose(_ref3, isCollapse) {
    var commit = _ref3.commit;

    commit(_types.MENU_CLOSE_OPEN, { isCollapse: isCollapse });
  }
}; // action.js   这个js中的文件都是用来执行操作，来调用mutations简介改变状态了
//# sourceMappingURL=actions.js.map