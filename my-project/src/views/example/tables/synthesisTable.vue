<template>
  <div class="todoWrap">
    <div class="todo-list">
      <h1 class="title">待办事项</h1>
      <div class="inputWrap">
        <el-input type="text" v-model="inputList" placeholder="有什么需要做的？" @keyup.enter.native="addList" clearable>
        </el-input>
      </div>
      <div>
        <el-checkbox class="checkedAll" v-model="checkAll" :indeterminate="isIndeterminate"
                     @change="handleCheckedAll" v-if="todos.length">全选</el-checkbox>
        <el-button size="mini" @click="deleteAll" v-if="todos.length">删除已完成</el-button>
      </div>
      <div class="list-wrap">
        <el-checkbox-group v-model="checkedTodo" @change="handleCheckedTodos" v-if="todos.length">
        <div class="listWrap">
            <p class="list" v-for="(todo,index) in todos">
              <el-checkbox :label="todo" :key="todo">{{todo}}</el-checkbox>
              <i class="el-icon-close" @click="deleteList(index)"></i>
            </p>
          </div>
        </el-checkbox-group>
        <div class="want-todo" v-else>请添加待办事项</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from "js-cookie";
  export default {
    name: "synthesis-table",
    mounted(){
      this.todos=JSON.parse(Cookies.get('todos'));
    },
    watch:{
      todos:(val)=>{
        Cookies.set('todos',val);
      }
    },
    data() {
      return {
        inputList:'',
        todos:[],   // todo条例
        checkedTodo:[],
        checkAll:false,   // 表示全选
        isIndeterminate:true,
      }
    },
    methods:{
      // 选中的状态    @value  -- 选中的checkbox中的数组
      handleCheckedTodos(value){
        let checkedCount=value.length;
        this.checkAll=checkedCount === this.todos.length;
        this.isIndeterminate=checkedCount>0 && checkedCount < this.todos.length;
      },
      // 表示全选或是全部选   @val --true：全选     -- false : 全不选
      handleCheckedAll(val){
        this.checkedTodo= val ? this.todos : [];
        this.isIndeterminate=false;
      },
    //  删除todolist
      deleteList(index){
        this.todos.splice(index,1);
        if(!this.todos){
          this.isIndeterminate=false;
        }
      },
    //  添加list
      addList(){
        if(!this.inputList) return;
        this.todos.unshift(this.inputList.trim());
        this.inputList='';
      },
    //  删除已完成
      deleteAll(){
        this.checkedTodo.map(todo => {
          const todoNum=this.todos.indexOf(todo);
          if(todoNum===-1) return;
          this.todos.splice(todoNum,1);
          this.checkedTodo=[];
        })
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.todoWrap
  width 100%
  height 100%
  overflow hidden
  position relative
  .todo-list
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    margin auto
    padding 0 20px
    width 400px
    height 500px
    border 1px solid #999
    border-radius 5px
    display -webkit-flex
    display flex
    flex-direction column
    .title
      font-size 20px
      text-align center
      padding 15px 0
    .inputWrap
      position relative
    .checkedAll
      padding  15px 0
      width 70px
    .list-wrap
      position relative
      flex 1
      height 100%
      overflow-y auto
      margin-bottom 20px
      .listWrap
        background-color #fff
        .list
            position relative
            height 30px
            font-size 16px
            line-height 30px
            .el-icon-close
              position absolute
              right 10px
              padding-top 9px
              cursor pointer
      .want-todo
        font-size 25px
</style>
