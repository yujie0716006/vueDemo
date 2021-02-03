// mutations.js中的内容都是用来更改state的状态的值
import {ECHARTS_CLICK,THEME_LAYOUT,MENU_CLOSE_OPEN,SET_LANGUAGE} from './types';
export default{
//  首页中改变折线图的状态
  [ECHARTS_CLICK](state,{handleClick}){
    state.echarts.clickState=handleClick;
  },

// 修改主题的布局
  [THEME_LAYOUT](state,{layoutPosition}){
    state.navMenuPosition=layoutPosition;
    sessionStorage.setItem('navMenuPosition', layoutPosition)
  },

// 左侧树的收缩与展示
[MENU_CLOSE_OPEN](state,{isCollapse}){
    state.isCollapse=isCollapse;
},
//  修改国际化语言
  [SET_LANGUAGE](state,languageValue){
    state.language = languageValue;
  }


}

