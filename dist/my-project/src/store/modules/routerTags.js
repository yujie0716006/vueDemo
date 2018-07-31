'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations;

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerTags = {
  state: {
    tagsArray: sessionStorage.getItem('tagsRouter') ? JSON.parse(sessionStorage.getItem('tagsRouter')) : [{ tagName: '首页', tagPath: '/dashboard', isClear: false }] // 路由导航的数据
  },
  mutations: (_mutations = {}, (0, _defineProperty3.default)(_mutations, _types.ADD_TAGS_ROUTER, function (state, _ref) {
    var addTag = _ref.addTag;

    state.tagsArray.push(addTag);
  }), (0, _defineProperty3.default)(_mutations, _types.FILTER_ALL_TAGSROUTER, function (state, routers) {
    state.tagsArray.splice(state.tagsArray.indexOf(routers), 1);
  }), _mutations),

  actions: {
    // 增加路由导航
    addTagsRouter: function addTagsRouter(_ref2, addTag) {
      var commit = _ref2.commit;

      commit(_types.ADD_TAGS_ROUTER, { addTag: addTag });
    },

    //  删除所有路由导航
    delAllTagsRouter: function delAllTagsRouter(_ref3, newTagsRouter) {
      var commit = _ref3.commit;

      newTagsRouter.map(function (item) {
        commit(_types.FILTER_ALL_TAGSROUTER, item);
      });
    }
  }
};
exports.default = routerTags;
//# sourceMappingURL=routerTags.js.map