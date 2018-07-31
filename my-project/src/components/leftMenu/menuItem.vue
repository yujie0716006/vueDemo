<template>
  <div class="menuItem">
    <el-submenu :index="item.path" v-if="item.children && item.children.length>0">
      <template slot="title">
        <i class="icon iconfont" :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </template>
      <template v-for="router in item.children">
        <menuItem v-if="router.children && router.children.length>0" :item="router"></menuItem>
        <el-menu-item v-else :index="item.path+'/'+router.path">
          <!--<i class="icon iconfont" :class="router.icon"></i>-->
          <span slot="title">{{router.name}}</span>
        </el-menu-item>
      </template>
    </el-submenu>

    <el-menu-item v-else :index="item.path">
      <i class="icon iconfont" :class="item.icon"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>
  </div>
</template>

<script>
  export default {
    name: "menuItem",
    props:{
      item:Object
    },
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
<!--覆盖element-ui中的样式-->
<style>
.el-menu--collapse .el-menu-item .el-submenu__icon-arrow, .el-menu--collapse  .el-submenu  .el-submenu__title .el-submenu__icon-arrow {
  display: none
}
.el-menu--collapse .el-menu-item span, .el-menu--collapse  .el-submenu  .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block
}
.el-submenu .el-menu-item{
  height: 43px;
  line-height:43px;
}
.el-menu-item, .el-submenu__title {
  height: 43px;
  line-height: 43px;
}
.menuItem>.el-menu-item>span{
  padding-left:20px
}
.menuItem>.el-submenu>.el-submenu__title>span,.el-menu--inline>.el-menu-item>span{
  padding-left:20px
}
  /* 水平方向的导航条的样式*/
.el-menu--horizontal>.menuItem{
  float: left;
}
.el-menu--horizontal >.menuItem > .el-menu-item.is-active {
  border-bottom: 2px solid #409EFF;
  color: #303133
}
.el-menu--horizontal>.menuItem>.el-menu-item>span{
  padding-left:0;
}
.el-menu--horizontal>.menuItem>.el-submenu>.el-submenu__title>span, .el-menu--inline>.el-menu-item>span{
  padding-left:0;
}
.el-menu--horizontal >.menuItem > .el-submenu:focus, .el-menu--horizontal >.menuItem > .el-submenu:hover {
  outline: 0

}
.el-menu--horizontal > .menuItem > .el-submenu .el-submenu__icon-arrow {
  right:0;
}
</style>
