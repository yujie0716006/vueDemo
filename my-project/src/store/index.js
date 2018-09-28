import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import routerTags from './modules/routerTags';

Vue.use(Vuex);
const state={
  isCollapse:false,
  // isCollapse:!!localStorage.getItem('menuButton') ? !!localStorage.getItem('menuButton') : false,   // 左侧树展开关闭的按钮
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
  scrollDis:null,  // 页面滚动的距离
  navMenuPosition:'left',
  // navMenuPosition:localStorage.getItem('layoutTheme') ? localStorage.getItem('layoutTheme') : 'left',   // 默认的导航条的位置在
  // 首先判断是否存在这个值，若存在则使用，如没有则使用后面的值
  language:localStorage.getItem('languageValue') || navigator.language
};
export default new Vuex.Store({
  modules:{
    routerTags
  },
  state,
  actions,
  mutations,
  getters
})
