<template>
    <el-tabs @tab-click="handleClick" class="tabWrap" type="border-card">
      <template v-for="(tab,index) in tabsTitles">
        <el-tab-pane :label="tab" :key="index">
          <span slot="label">{{tab}}<span class="titleNum">{{num}}</span></span>
          <slot :clickTitleData="clickData"></slot>
        </el-tab-pane>
      </template>
    </el-tabs>

</template>

<script>
  export default {
    name: "tab",
    props:{
      tabsTitles:Array
    },
    mounted(){

    },
    data() {
      return {
        clickData:'',
        num:6000
      }
    },
    methods: {
      handleClick(tab, event) {
        this.clickData=`${tab.label}切换tab后，展示在tab面板中的内容${this.num}`;
      }
    }
  }
</script>

<!--覆盖element-ui中的tab中的样式-->
<style>
  .el-tabs--border-card{
    border:0;
    -webkit-box-shadow:0 0 0 0;
    box-shadow:0 0 0 0;
  }
  .el-tabs--border-card > .el-tabs__header{
    background-color: #eef2f5;
    border:0;
    height:50px
  }
  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active{
    color: #1D8EFF;
    background-color: #fff;
    border-right-color: transparent;
    border-left-color: transparent;
    border-top:2px solid #1D8EFF;
  }
  .el-tabs--border-card > .el-tabs__header .el-tabs__item{
    margin:0;
  }
  .el-tabs__item{
    height:50px;
    line-height: 48px;
  }
  .el-tabs--border-card > .el-tabs__content{
    min-height:400px;
  }
</style>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tabWrap
    margin-top 20px
    font-size 14px
    .titleNum
      padding-left 6px
</style>


