import Vue from 'vue'
import Router from 'vue-router'

const layout = () => import('@/views/layout');
const dashboard = () => import('@/views/dashboard/dashboard');
const timeLine = () => import('@/views/timeLine/timeLine');
const tab = () => import('@/views/example/tab/tab');
const dragTable = () => import('@/views/example/tables/dragTable');
const tables = () => import('@/views/example/tables/tables');
const dynamicTable = () => import('@/views/example/tables/dynamicTable');
const editTable = () => import('@/views/example/tables/editTable');
const showComponents = () => import('@/views/showComponents/index');
const stickyDemo = () => import('@/views/stickyDemo');
const exportExcel = () => import('@/views/excel/exportExcel');
const exportSelected = () => import('@/views/excel/exportSelected');
const promiseDemo = () => import('@/views/promiseDemo');
const routerDemo = () => import('@/views/routerDemo');
const about = () => import('@/views/routerDemo/components/about');
const home = () => import('@/views/routerDemo/components/home');
const message = () => import('@/views/routerDemo/components/message');
const messageDetail = () => import('@/views/routerDemo/components/messageDetail');
const zipDownload = () => import('@/views/excel/zip');
const i18n = () => import('@/views/i18n');
const VueMixins = () => import('@/views/VueGrammar/VueMixins')

Vue.use(Router)


/*路由数组里面的对象是这种类型的
*     {
      path: '/', // 路径
      component: layout, // 最外面的layout表示每次都是通过他来显示右边展示去的内容的，他的子元素就表示导航的层级
      alwaysShow: true, // 当设置为true的时候表示，这个菜单一直显示在根目录上
      hidden: true, // 表示隐藏这个菜单目录
      children: [
        {
          path: '/dashboard',
          component: dashboard,
          meta: {icon: 'icon-shouye', title: '首页',role: []}
        }
      ]
    }
* */


export default new Router({
  // 给激活的路由增加样式
  routerLinkActive: 'active',
  routes: [
    {
      path: '/',
      component: layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: dashboard,
          name: 'dashboard',
          meta: {
            icon: 'icon-shouye',
            title: 'dashboard'
          }
        }
      ]
    },
    {
      path: '/example',
      component: layout,
      redirect: '/example/tab',
      meta: {
        icon: 'icon-shouye',
        title: '综合实例'
      },
      children: [
        {
          path: 'tab',
          component: tab,
          name: "tab",
          meta: {
            title: 'tab'
          }
        },
        {
          path: 'tables',
          component: tables,
          name: 'tables',
          redirect: '/example/tables/dragTable',
          meta: {
            title: '小实例'
          },
          children: [
            {
              path: 'dragTable',
              component: dragTable,
              name: "dragTable",
              meta: {
                title: '拖拽表格'
              }
            },
            {
              path: 'dynamicTable',
              component: dynamicTable,
              name: "dynamicTable",
              meta: {
                title: '动态表格'
              }
            },
            {
              path: 'editTable',
              component: editTable,
              name: "editTable",
              meta: {
                title: '编辑表格'
              }
            },
          ]
        }
      ]
    },
    {
      path: '/timeline',
      component: layout,
      children: [
        {
          path: 'index',
          component: timeLine,
          name: 'timeLine',
          meta: {
            icon: 'icon-shouye',
            title: '时间轴',
          }
        }
      ]
    },
    {
      path: '/showComponents',
      component: layout,
      children: [
        {
          path: 'index',
          component: showComponents,
          name: 'showComponents',
          meta: {
            title: '组件展示',
            icon: 'icon-shouye',
          }
        }
      ]
    },
    {
      path: "/showComponents",
      component: layout,
      children: [
        {
          path: "stickyDemo",
          component: stickyDemo,
          name: 'stickDemo',
          meta: {
            title: '吸附在任意位置（未做完）',
            icon: 'icon-shouye',
          }
        }
      ]
    },
    {
      path: '/excelViews',
      name: 'excelViews',
      component: layout,
      meta: {
        icon: 'icon-shouye',
        title: 'excel'
      },
      redirect: '/excelViews/exportExcel',
      children: [
        {
          path: 'exportExcel',
          name: 'exportExcel',
          component: exportExcel,
          meta: {
            title: 'export excel'
          },
        },
        {
          path: 'exportSelected',
          name: 'exportSelected',
          component: exportSelected,
          meta: {
            title: 'export selected',
          }
        },
        {
          path: 'promiseDemo',
          name: 'promiseDemo',
          component: promiseDemo,
          meta: {
            title: 'promise',
          }
        },
        {
          path: 'zip',
          name: 'zip',
          component: zipDownload,
          meta: {
            title: 'zip',
          }
        }
      ]
    },
    {
      path: '/routerDemo',
      name: 'routerDemo',
      component: layout,
      redirect: '/routerDemo/index',
      children: [
        {
          path: 'index',
          name: 'routerView',
          component: routerDemo,
          meta: {
            title: '路由例子',
            icon: 'icon-shouye',
          },
          children: [
            {
              path: 'home',
              component: home,
              name: 'home',
              meta: {title: 'home'}
            },
            {
              path: 'about',
              component: about,
              name: 'about',
              meta: {title: 'about'},
              children: [
                {
                  path: 'messageshow',
                  component: message,
                  name: 'message',
                  meta: {title: 'message'},
                  children: [
                    {
                      path: 'messageDetail/:id',
                      name: 'messageDetail',
                      component: messageDetail,
                      meta: {title: 'messageDetail'}
                    }
                  ]
                }
              ]
            },
          ]
        }
      ]
    },
    {
      path: '/i18n',
      component: layout,
      children: [
        {
          path: 'index',
          component: i18n,
          name: 'i18n',
          meta: {
            title: '国际化',
            icon: 'icon-shouye',
          },
        }
      ]
    },
    {
      path: '/vue_grammar',
      component: layout,
      name: 'vueGrammar',
      alwaysShow: true,
      meta: {
        title: 'vue语法',
        icon: 'icon-shouye',
      },
      children: [
        {
          path: 'vue_mixins',
          name: 'mixins',
          component: VueMixins,
          meta: {title: 'mixins'}
        }
      ]
    }
  ]
})
