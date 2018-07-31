import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/views/layout';
import example from '@/views/example/index';
import dashboard from '@/views/dashboard/dashboard';
import timeLine from '@/views/timeLine/timeLine';
import tab from '@/views/example/tab/tab';
import tables from '@/views/example/tables/index';
import dragTable from '@/views/example/tables/dragTable';
import dynamicTable from '@/views/example/tables/dynamicTable';
import editTable from '@/views/example/tables/editTable';
import showComponents from "@/views/showComponents/index";
import twoRouterView from "@/views/twoRouterView/index";
import twoRouter from "@/views/twoRouterView/showRouterView";
import viewOne from "@/views/twoRouterView/viewOne";
import viewTwo from "@/views/twoRouterView/viewTwo";
import viewThree from "@/views/twoRouterView/viewThree";

Vue.use(Router)


export default new Router({
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
        }
      ]
    },
  ]
})
