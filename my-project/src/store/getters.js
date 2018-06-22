const getters={
  isCollapse:state => state.isCollapse,
  clickState:state => state.echarts.clickState,
  todos:state => state.todosObj.todos,
  checkedTodo:state => state.todosObj.checkedTodo,
  checkAll:state => state.todosObj.checkAll,
  isIndeterminate:state => state.todosObj.isIndeterminate,
};
export default getters
