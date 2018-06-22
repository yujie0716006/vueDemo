'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _layout = require('@/views/layout');

var _layout2 = _interopRequireDefault(_layout);

var _index = require('@/views/example/index');

var _index2 = _interopRequireDefault(_index);

var _dashboard = require('@/views/dashboard/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _timeLine = require('@/views/timeLine/timeLine');

var _timeLine2 = _interopRequireDefault(_timeLine);

var _shuttleBox = require('@/views/shuttleBox/shuttleBox');

var _shuttleBox2 = _interopRequireDefault(_shuttleBox);

var _tab = require('@/views/example/tab/tab');

var _tab2 = _interopRequireDefault(_tab);

var _index3 = require('@/views/example/tables/index');

var _index4 = _interopRequireDefault(_index3);

var _dragTable = require('@/views/example/tables/dragTable');

var _dragTable2 = _interopRequireDefault(_dragTable);

var _dynamicTable = require('@/views/example/tables/dynamicTable');

var _dynamicTable2 = _interopRequireDefault(_dynamicTable);

var _editTable = require('@/views/example/tables/editTable');

var _editTable2 = _interopRequireDefault(_editTable);

var _synthesisTable = require('@/views/example/tables/synthesisTable');

var _synthesisTable2 = _interopRequireDefault(_synthesisTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    redirect: '/layout'
  }, {
    path: '/layout',
    component: _layout2.default,
    children: [{
      path: '/dashboard',
      component: _dashboard2.default,
      icon: 'icon-shouye',
      name: '首页'
    }, {
      path: '/example',
      component: _index2.default,
      name: '综合实力',
      icon: 'icon-shouye',
      children: [{
        path: 'tab',
        component: _tab2.default,
        name: "tab"
      }, {
        path: '/example/tables',
        component: _index4.default,
        name: '小实例',
        children: [{
          path: 'dragTable',
          component: _dragTable2.default,
          name: "拖拽表格"
        }, {
          path: 'dynamicTable',
          component: _dynamicTable2.default,
          name: "动态表格"
        }, {
          path: 'editTable',
          component: _editTable2.default,
          name: "编辑表格"
        }, {
          path: 'synthesisTable',
          component: _synthesisTable2.default,
          name: "todoList待办事项"
        }]
      }]
    }, {
      path: '/timeline',
      component: _timeLine2.default,
      icon: 'icon-shouye',
      name: '时间轴'
    }, {
      path: '/shuttleBox',
      component: _shuttleBox2.default,
      icon: 'icon-shouye',
      name: '穿梭框'
    }]
  }]
});
//# sourceMappingURL=index.js.map