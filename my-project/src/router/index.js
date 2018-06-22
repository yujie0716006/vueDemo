import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/views/layout';
import example from '@/views/example/index';
import dashboard from '@/views/dashboard/dashboard';
import timeLine from '@/views/timeLine/timeLine';
import shuttleBox from '@/views/shuttleBox/shuttleBox';
import tab from '@/views/example/tab/tab';
import tables from '@/views/example/tables/index';
import dragTable from '@/views/example/tables/dragTable';
import dynamicTable from '@/views/example/tables/dynamicTable';
import editTable from '@/views/example/tables/editTable';
import synthesisTable from '@/views/example/tables/synthesisTable';

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
              {
                path:'synthesisTable',
                component:synthesisTable,
                name:"todoList待办事项"
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
          path:'/shuttleBox',
          component:shuttleBox,
          icon:'icon-shouye',
          name:'穿梭框'
        },
      ]
    }
  ]
})
