<template>
  <div class="menuWrap">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse" router >
      <menuItem v-for="(item,index) in router[1].children" :key="index" :item="item"></menuItem>
    </el-menu>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import menuItem from "./menuItem"
  export default {
    name: "index",
    mounted(){
      console.log('router',this.router);
    },
    components:{menuItem},
    data() {
      return {
      }
    },
    computed:{
      ...mapGetters([
        'isCollapse'
      ]),
      router(){
        return this.$router.options.routes;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .menuWrap
    height 100%
    .el-menu-vertical-demo:not(.el-menu--collapse)
      width 200px
      min-height 100%
    .el-menu--collapse
      height 100%

</style>
