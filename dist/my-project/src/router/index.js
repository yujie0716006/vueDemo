'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layout = function layout() {
  return import('@/views/layout');
};
var example = function example() {
  return import('@/views/example/index');
};
var dashboard = function dashboard() {
  return import('@/views/dashboard/dashboard');
};
var timeLine = function timeLine() {
  return import('@/views/timeLine/timeLine');
};
var tab = function tab() {
  return import('@/views/example/tab/tab');
};
var tables = function tables() {
  return import('@/views/example/tables/index');
};
var dragTable = function dragTable() {
  return import('@/views/example/tables/dragTable');
};
var dynamicTable = function dynamicTable() {
  return import('@/views/example/tables/dynamicTable');
};
var editTable = function editTable() {
  return import('@/views/example/tables/editTable');
};
var showComponents = function showComponents() {
  return import('@/views/showComponents/index');
};
var twoRouterView = function twoRouterView() {
  return import('@/views/twoRouterView/index');
};
var twoRouter = function twoRouter() {
  return import('@/views/twoRouterView/showRouterView');
};
var stickyDemo = function stickyDemo() {
  return import('@/views/stickyDemo');
};
var excelView = function excelView() {
  return import('@/views/excel');
};
var exportExcel = function exportExcel() {
  return import('@/views/excel/exportExcel');
};
var exportSelected = function exportSelected() {
  return import('@/views/excel/exportSelected');
};
var promiseDemo = function promiseDemo() {
  return import('@/views/promiseDemo');
};
var routerDemo = function routerDemo() {
  return import('@/views/routerDemo');
};
var about = function about() {
  return import('@/views/routerDemo/components/about');
};
var home = function home() {
  return import('@/views/routerDemo/components/home');
};
var message = function message() {
  return import('@/views/routerDemo/components/message');
};
var messageDetail = function messageDetail() {
  return import('@/views/routerDemo/components/messageDetail');
};
var zipDownload = function zipDownload() {
  return import('@/views/excel/zip');
};
var i18n = function i18n() {
  return import('@/views/i18n');
};

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  // 给激活的路由增加样式
  routerLinkActive: 'active',
  routes: [{
    path: '/',
    redirect: '/layout'
  }, {
    path: '/layout',
    component: layout,
    name: 'layout',
    children: [{
      path: '/dashboard',
      component: dashboard,
      icon: 'icon-shouye',
      name: '首页',
      meta: { routerList: true }
    }, {
      path: '/example',
      component: example,
      name: '综合实力',
      icon: 'icon-shouye',
      meta: { routerList: true },
      children: [{
        path: 'tab',
        component: tab,
        name: "tab",
        meta: { routerList: true }
      }, {
        path: '/example/tables',
        component: tables,
        name: '小实例',
        meta: { routerList: true },
        children: [{
          path: 'dragTable',
          component: dragTable,
          name: "拖拽表格",
          meta: { routerList: true }
        }, {
          path: 'dynamicTable',
          component: dynamicTable,
          name: "动态表格",
          meta: { routerList: true }
        }, {
          path: 'editTable',
          component: editTable,
          name: "编辑表格",
          meta: { routerList: true }
        }]
      }]
    }, {
      path: '/timeline',
      component: timeLine,
      icon: 'icon-shouye',
      name: '时间轴',
      meta: { routerList: true }
    }, {
      path: '/showComponents',
      component: showComponents,
      name: '组件展示',
      icon: 'icon-shouye',
      meta: { routerList: true }
    }, {
      path: '/twoRouterView',
      name: '两个视图',
      icon: 'icon-shouye',
      component: twoRouterView,
      meta: { routerList: true },
      children: [{
        path: "twoView",
        component: twoRouter,
        name: '视图展示',
        meta: { routerList: true }
        /*children:[
          {
            path:'viewOne',
            icon:'icon-shouye',
            component:viewOne,
          },
          {
            path:'viewTwo',
            icon:'icon-shouye',
            component:viewThree,
          },
          {
            path:'viewThree',
            icon:'icon-shouye',
            components:{
              default:viewOne,
              'view-right':viewTwo
            },
          }
        ]*/
      }]
    }, {
      path: "/stickyDemo",
      component: stickyDemo,
      name: '吸附在任意位置（未做完）',
      icon: 'icon-shouye',
      meta: { routerList: true }
    }, {
      path: '/excelViews',
      name: 'excel',
      component: excelView,
      icon: 'icon-shouye',
      meta: { routerList: true },
      children: [{
        path: 'exportExcel',
        name: 'export excel',
        component: exportExcel,
        meta: { routerList: true }
      }, {
        path: 'exportSelected',
        name: 'export selected',
        component: exportSelected,
        meta: { routerList: true }
      }, {
        path: 'promiseDemo',
        name: 'promise',
        component: promiseDemo,
        meta: { routerList: true }
      }, {
        path: 'zip',
        name: 'zip',
        component: zipDownload
      }]
    }, {
      path: '/routerDemo',
      name: '路由例子',
      icon: 'icon-shouye',
      component: routerDemo,
      meta: { routerList: true },
      children: [{
        path: 'home',
        component: home,
        name: 'home',
        meta: { routerList: true }
      }, {
        path: 'about',
        component: about,
        name: 'about',
        meta: { routerList: false },
        children: [{
          path: 'messageshow',
          component: message,
          name: 'message',
          meta: { routerList: false },
          children: [{
            path: 'messageDetail/:id',
            name: 'messageDetail',
            component: messageDetail,
            meta: { routerList: false }
          }]
        }]
      }]
    }, {
      path: '/i18n',
      name: '国际化',
      icon: 'icon-shouye',
      component: i18n
    }]
  }]
});
//# sourceMappingURL=index.js.map