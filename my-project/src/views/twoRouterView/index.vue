<template>
  <div class="views-wrap ">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.views-wrap
  width 100%
  height 100%
</style>
