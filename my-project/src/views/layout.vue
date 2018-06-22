<template>
  <el-container>
    <el-aside width="auto">
      <leftMenu></leftMenu>
    </el-aside>
    <el-container>
      <el-header>
        <topTitle></topTitle>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import leftMenu from '@/components/leftMenu'
  import topTitle from '@/components/topTitle/topTitle'
  export default {
    name: "layout",
    components:{leftMenu,topTitle},
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.el-container
  height 100%
  .el-main
    height 100%
    padding 0 !important
</style>
