<template>
  <div class="clearFloat">
    <h1>router-link的跳转路由：</h1>
    <ul>
      <li><router-link to="/dashboard">跳转到首页</router-link></li>
      <li><router-link to="/twoRouterView/twoView/viewOne">视图展示1</router-link></li>
      <li><router-link to="/twoRouterView/twoView/viewTwo">视图展示2</router-link></li>
      <li><router-link to="/twoRouterView/twoView/viewThree">视图展示3</router-link></li>
    </ul>
    <router-view class="view-one"></router-view>s
    <router-view class="view-two" name="view-right"></router-view>
  </div>
</template>

<script>

  export default {
    name: "show-router-view",
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  ul
    padding 20px
    li
      padding 5px
  .view-one,view-two
    width 50%
    height 100%
    float left
</style>
