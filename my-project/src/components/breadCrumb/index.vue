<template>
  <div class="breadCrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/dashboard">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in list " :key="index" v-show="item.name != '首页'">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "breadCrumb",
    mounted(){
      this.getBreadcrumb();
    },
    watch:{
      $route(){
        this.getBreadcrumb();
      }
    },
    data() {
      return {
        list:[],
      }
    },
    methods:{
      getBreadcrumb(){
        const layout = this.$route.matched.shift();
        this.list = this.$route.matched;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.breadCrumb
  height 100%
  width 100%
</style>
