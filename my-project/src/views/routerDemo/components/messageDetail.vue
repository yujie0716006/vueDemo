<template>
  <div>
    qqqqqqqqqqqqqqqqq
    {{`id的值为：${id}`}}
  </div>
</template>

<script>
  export default {
    name: "message-detail",
    watch:{
      // 监听当前router函数的值有没有变
      '$route'(to,from){
        // 当路由改变时，会调用这里面的函数
        this.id = this.$route.params.id;
      }
    },
    data() {
      return {
        id:this.$route.params.id
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
