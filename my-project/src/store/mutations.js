// mutations.js中的内容都是用来更改state的状态的值
import {ECHARTS_CLICK} from './types';
export default{
//  首页中改变折线图的状态
  [ECHARTS_CLICK](state,{handleClick}){
    state.echarts.clickState=handleClick;
  },



}

