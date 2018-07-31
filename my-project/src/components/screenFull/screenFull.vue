<template>
  <el-tooltip effect="dark" content="全屏" placement="bottom-end">
    <i class="el-icon-rank" @click="fullScreen"></i>
  </el-tooltip>

</template>

<script>
  import screenFull from 'screenfull';
  export default {
    name: "screen-full",
    data() {
      return {}
    },
    methods:{
      fullScreen(){
        screenFull.toggle();
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .el-icon-rank
    font-size 30px
    color #000
    cursor pointer
</style>
