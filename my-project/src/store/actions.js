// action.js   这个js中的文件都是用来执行操作，来调用mutations简介改变状态了
import {ECHARTS_CLICK,BACK_TO_TOP,THEME_LAYOUT,MENU_CLOSE_OPEN,SET_LANGUAGE} from './types';
export default{
//  调用修改首页折线图的状态
  echartsClick({commit},handleClick){
    commit(ECHARTS_CLICK,{handleClick})
  },

//  修改主题的布局
  changeTheme({commit},layoutPosition){
    commit(THEME_LAYOUT,{layoutPosition})
  },
//  左侧树的收缩与展示
  menuOpenClose({commit},isCollapse){
    commit(MENU_CLOSE_OPEN,{isCollapse})
  },

//  修改国际化语言
  changeLanguage({commit},languageValue){
    commit(SET_LANGUAGE,languageValue);
  }

}
