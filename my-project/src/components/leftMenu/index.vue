<template>
  <div class="menuWrap">
    <el-menu :default-active="$route.path" :class="navMode =='vertical' ? 'el-menu-vertical-demo' : 'el-menu-demo'" :collapse="isCollapse" router :mode="navMode">
      <menu-item v-for="(item,index) in router" :key="index" :item="item" :base-path="item.path"></menu-item>
    </el-menu>
  </div>
</template>

<script>
  import menuItem from "./menuItem"
  import { mapGetters } from 'vuex';
  export default {
    name: "left-menu",
    mounted(){
      console.log('现在的路由列表',this.router);
    },
    watch:{
        navMenuPosition(val){
        if(val == 'top'){
          this.navMode='horizontal';
        }else if(val == 'left'){
          this.navMode='vertical';
        }
      }
    },
    components:{menuItem},
    data() {
      return {
        navMode:'vertical',
      }
    },
    computed:{
      ...mapGetters([
        'isCollapse','navMenuPosition'
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
