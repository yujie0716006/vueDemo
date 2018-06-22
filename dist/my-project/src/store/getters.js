"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getters = {
  isCollapse: function isCollapse(state) {
    return state.isCollapse;
  },
  clickState: function clickState(state) {
    return state.echarts.clickState;
  },
  todos: function todos(state) {
    return state.todosObj.todos;
  },
  checkedTodo: function checkedTodo(state) {
    return state.todosObj.checkedTodo;
  },
  checkAll: function checkAll(state) {
    return state.todosObj.checkAll;
  },
  isIndeterminate: function isIndeterminate(state) {
    return state.todosObj.isIndeterminate;
  }
};
exports.default = getters;
//# sourceMappingURL=getters.js.map