import Vue from 'vue'
import Router from 'vue-router'

const layout = () => import('@/views/layout');
const example = () => import('@/views/example/index');
const dashboard = () => import('@/views/dashboard/dashboard');
const timeLine = () => import('@/views/timeLine/timeLine');
const tab = () => import('@/views/example/tab/tab');
const tables = () => import('@/views/example/tables/index');
const dragTable = () => import('@/views/example/tables/dragTable');
const dynamicTable = () => import('@/views/example/tables/dynamicTable');
const editTable = () => import('@/views/example/tables/editTable');
const showComponents = () => import('@/views/showComponents/index');
const twoRouterView = () => import('@/views/twoRouterView/index');
const twoRouter = () => import('@/views/twoRouterView/showRouterView');
const stickyDemo = () => import('@/views/stickyDemo');
const excelView = () => import('@/views/excel');
const exportExcel = () => import('@/views/excel/exportExcel');
const exportSelected = () => import('@/views/excel/exportSelected');
const promiseDemo = () => import('@/views/promiseDemo');
const routerDemo = () => import('@/views/routerDemo');
const about = () => import('@/views/routerDemo/components/about');
const home = () => import('@/views/routerDemo/components/home');
const message = () => import('@/views/routerDemo/components/message');
const messageDetail = () => import('@/views/routerDemo/components/messageDetail');

Vue.use(Router)


export default new Router({
  // 给激活的路由增加样式
  routerLinkActive:'active',
  routes:[
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/layout',
      component: layout,
      children:[
        {
          path:'/dashboard',
          component:dashboard,
          icon:'icon-shouye',
          name:'首页'
        },
        {
          path:'/example',
          component:example,
          name:'综合实力',
          icon:'icon-shouye',
          children:[
            {
              path:'tab',
              component:tab,
              name:"tab"
            },
            {
            path:'/example/tables',
            component:tables,
            name:'小实例',
            children:[
              {
                path:'dragTable',
                component:dragTable,
                name:"拖拽表格"
              },
              {
                path:'dynamicTable',
                component:dynamicTable,
                name:"动态表格"
              },
              {
                path:'editTable',
                component:editTable,
                name:"编辑表格"
              },
            ]
          }
          ]
        },
        {
          path:'/timeline',
          component:timeLine,
          icon:'icon-shouye',
          name:'时间轴'
        },
        {
          path:'/showComponents',
          component:showComponents,
          name:'组件展示',
          icon:'icon-shouye',
        },
        {
          path:'/twoRouterView',
          name:'两个视图',
          icon:'icon-shouye',
          component:twoRouterView,
          children:[
            {
            path:"twoView",
            component:twoRouter,
            name:'视图展示',
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
          }
          ]
        },
        {
          path:"/stickyDemo",
          component:stickyDemo,
          name:'吸附在任意位置（未做完）',
          icon:'icon-shouye'
        },
        {
          path:'/excelViews',
          name:'excel',
          component:excelView,
          icon:'icon-shouye',
          children:[
            {
              path:'exportExcel',
              name:'export excel',
              component:exportExcel,
            },
            {
              path:'exportSelected',
              name:'export selected',
              component:exportSelected,
            },
            {
              path:'promiseDemo',
              name:'promise',
              component:promiseDemo
            }
          ]
        },
        {
          path:'/routerDemo',
          name:'路由例子',
          icon:'icon-shouye',
          component:routerDemo,
          children:[
            {
              path:'home',
              component:home,
              name:'home'
            },
            {
              path:'about',
              component:about,
              name:'about',
              children:[
                {
                  path:'messageshow',
                  component:message,
                  name:'message',
                  children:[
                    {
                      path:'messageDetail/:id',
                      name:'messageDetail',
                      component:messageDetail
                    }
                  ]
                }
              ]
            },
          ]
        }
      ]
    },
  ]
})
