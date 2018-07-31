<template>
  <transition name="el-fade-in-linear">
    <div v-show="isVisibility" class="el-icon-d-arrow-right" @click="backToTop"></div>
  </transition>
</template>

<script>
  export default {
    name: "index",
    props:{
      scrollDis:Number
    },
    watch:{
      scrollDis(val){
        this.scrollDis=val;
        if(val>this.visibilityArea){
          this.isVisibility=true;
        }else{
          this.isVisibility=false;
        }
      },
    },
    data() {
      return {
        visibilityArea:500,   // 可见的滚动区域
        isVisibility:false,   // 返回顶部的按键是否显示
      }
    },
    methods:{
      // 返回顶部的函数
      backToTop(){
        this.$emit('listenScroll');
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.el-icon-d-arrow-right
  position fixed
  bottom 50px
  right 60px
  font-size 50px
  transform rotate(-90deg)
  color #000c
  font-weight bolder
  cursor pointer
</style>
