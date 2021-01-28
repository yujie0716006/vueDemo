<template>
  <div>
    <div>
      <router-link to="/routerDemo/index/home">home按钮</router-link>
      <router-link to="/routerDemo/index/about">about按钮</router-link>
  </div>
    <div>
      下面为router-view内容展示
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </div>
  </div>
</template>

<script>
  export default {
    name: "router-demo",
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.router-link-active
  color green
  font-weight bolder
</style>
