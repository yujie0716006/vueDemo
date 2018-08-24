<template>
  <div>
    我是home文件中的内容
  </div>
</template>

<script>
  export default {
    name: "home",
    mounted(){
      console.log('address',this.address);
    },
    data() {
      return {
        address:this.$route.query.address
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
