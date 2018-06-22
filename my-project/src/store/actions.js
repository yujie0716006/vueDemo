// action.js   这个js中的文件都是用来执行操作，来调用mutations简介改变状态了
import {ECHARTS_CLICK} from './types';
export default{
//  调用修改首页折线图的状态
  echartsClick({commit},handleClick){
    commit(ECHARTS_CLICK,{handleClick})
  },

}
