<template>
  <div class="menuItem" v-if="!item.hidden">
    <el-menu-item v-if="hasOneChildren(item.children, item) && !item.alwaysShow" :index="resolvePath(oneChildren.path)">
      <i class="icon iconfont" :class="oneChildren.meta && oneChildren.meta.icon"></i>
      <span slot="title">{{oneChildren.meta && oneChildren.meta.title}}</span>
    </el-menu-item>

    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <i class="icon iconfont" :class="item.meta && item.meta.icon"></i>
        <span slot="title">{{item.meta && item.meta.title}}</span>
      </template>
      <template v-for="router in item.children">
        <el-menu-item v-if="hasOneChildren(router.children, router)" :index="resolvePath(router.path)">
          <span slot="title">{{router.meta && router.meta.title}}</span>
        </el-menu-item>
        <menu-item v-else :item="router" :key="router.path" :base-path="resolvePath(router.path)"></menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
  import path from 'path'

  export default {
    name: "menuItem",
    props: {
      item: Object,
      basePath: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        oneChildren: null
      }
    },
    methods: {
      //  判断是否只有一个子children
      hasOneChildren(children = [], parent) {
        //  首先将hidden:true的过滤出来，表示不展示的目录
        const routerChildren = children.filter(item => {
          if (item.hidden) {
            return false
          } else {
            this.oneChildren = item
            return true
          }
        })

        //  当routerChildren.length=1时，表示只有一个子级
        if (routerChildren.length === 1) {
          return true
        }

        //  当routerChildren.length=0时，表示没有子级，要显示的就是他自己
        if (routerChildren.length === 0) {
          this.oneChildren = {...parent, hasNoChildren: true}
          return true
        }

        //  如果上面的都没有进入的话， 表示他就是多层级的
        return false
      },
      //  拼接路由的路径
      resolvePath(routerPath) {
        return path.resolve(this.basePath, routerPath)
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
<!--覆盖element-ui中的样式-->
<style>
  .el-menu--collapse .el-menu-item .el-submenu__icon-arrow, .el-menu--collapse .el-submenu .el-submenu__title .el-submenu__icon-arrow {
    display: none
  }

  .el-menu--collapse .el-menu-item span, .el-menu--collapse .el-submenu .el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block
  }

  .el-submenu .el-menu-item {
    height: 43px;
    line-height: 43px;
  }

  .el-menu-item, .el-submenu__title {
    height: 43px;
    line-height: 43px;
  }

  .menuItem > .el-menu-item > span {
    padding-left: 20px
  }

  .menuItem > .el-submenu > .el-submenu__title > span, .el-menu--inline > .el-menu-item > span {
    padding-left: 20px
  }

  /* 水平方向的导航条的样式*/
  .el-menu--horizontal > .menuItem {
    float: left;
  }

  .el-menu--horizontal > .menuItem > .el-menu-item.is-active {
    border-bottom: 2px solid #409EFF;
    color: #303133
  }

  .el-menu--horizontal > .menuItem > .el-menu-item > span {
    padding-left: 0;
  }

  .el-menu--horizontal > .menuItem > .el-submenu > .el-submenu__title > span, .el-menu--inline > .el-menu-item > span {
    padding-left: 0;
  }

  .el-menu--horizontal > .menuItem > .el-submenu:focus, .el-menu--horizontal > .menuItem > .el-submenu:hover {
    outline: 0

  }

  .el-menu--horizontal > .menuItem > .el-submenu .el-submenu__icon-arrow {
    right: 0;
  }
</style>
