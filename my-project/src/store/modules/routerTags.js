import {ADD_TAGS_ROUTER,FILTER_ALL_TAGSROUTER} from '../types';
const routerTags = {
  state : {
    tagsArray:sessionStorage.getItem('tagsRouter') ? JSON.parse(sessionStorage.getItem('tagsRouter')) : [{tagName:'首页',tagPath:'/dashboard',isClear:false}],   // 路由导航的数据
    tagsRouterName:[],
  },
  mutations:{
    [ADD_TAGS_ROUTER](state,{addTag}){
      state.tagsArray.push(addTag);
      state.tagsRouterName.push(addTag.tagName);
    },

  //  过滤出所有的要删除的路由导航
    [FILTER_ALL_TAGSROUTER](state,routers){
      state.tagsArray.splice(state.tagsArray.indexOf(routers),1);
    },
  },
 
  actions:{
    // 增加路由导航
    addTagsRouter({commit},addTag){
      commit(ADD_TAGS_ROUTER,{addTag})
    },
  //  删除所有路由导航
    delAllTagsRouter({commit},newTagsRouter){
      newTagsRouter.map(item => {
        commit(FILTER_ALL_TAGSROUTER,item);
      });
    },

  },
};
export default routerTags;
