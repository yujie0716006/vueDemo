<template>
  <div>
    <div>
      记录input中的内容：<el-input placeholder="请输入内容"></el-input>
      <br>
      我是about文件中的内容
    </div>
    <div>
      <router-link to="/routerDemo/about/messageshow">message按钮</router-link>
      <p>下面显示的message信息router-view</p>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
  export default {
    name: "home",
    data() {
      return {
        id:5,
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.el-input
  width 300px
</style>
