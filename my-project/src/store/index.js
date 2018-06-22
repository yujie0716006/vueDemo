import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);
const state={
  isCollapse:false,   // 左侧树展开关闭的按钮
  echarts:{     // 首页中的折线图
    clickState:"newVisits",
    "newVisits":{
      first:[150,220,500,776,940,438,326],
      last:[365,452,564,422,422,785,746]
    },
    "messages":{
      first:[202,123,500,764,452,872,245],
      last:[557,245,785,435,534,756,412],
    },
    "purchases":{
      first:[365,452,564,422,422,785,746],
      last:[557,245,785,435,534,756,412],
    },
    "shoppings":{
      first:[365,452,564,422,422,785,746],
      last:[150,220,500,776,940,438,326],
    }
  },
};
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
