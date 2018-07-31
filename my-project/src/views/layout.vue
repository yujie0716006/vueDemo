<template>
  <el-container>
    <el-aside width="auto" v-show="navMenuPosition == 'left'">
      <leftMenu></leftMenu>
    </el-aside>
    <el-container>
      <el-header>
        <topTitle>
          <div slot="topNavMenu" v-show="navMenuPosition == 'top'" class="top-menu">
            <leftMenu></leftMenu>
          </div>
        </topTitle>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import leftMenu from '@/components/leftMenu'
  import topTitle from '@/components/topTitle/topTitle';
  import {mapGetters} from 'vuex';
  export default {
    name: "layout",
    components:{leftMenu,topTitle},
    data() {
      return {}
    },
    computed:{
      ...mapGetters([
        'navMenuPosition'
      ])
    }
  }
</script>
<style>
  .el-header .top-menu>.menuWrap>.el-menu--horizontal{
    border-bottom:0;
    height:55px;
  }
  .el-header .top-menu>.menuWrap>.el-menu--horizontal>.menuItem>.el-menu-item{
    height:100%;
    line-height:56px;
  }
  .el-menu--horizontal>.menuItem>.el-submenu>.el-submenu__title, .el-menu--inline>.el-menu-item{
    height:100%;
    line-height:56px;
  }
  .el-header .top-menu>.menuWrap>.el-menu--horizontal>.menuItem span{
    font-size:15px;
  }
</style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.el-container
  height 100%
  .el-header
    height 95px !important
    padding 0 !important
  .el-main
    height 100%
    padding 0 !important
  .el-header
    .top-menu
      display inline-block
</style>
