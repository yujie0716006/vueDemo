<template>
  <div>
    <div>
      {{clickTitleData.clickTitleData}}
    </div>
    <div>
      {{first}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabsContent",
    props:{
      clickTitleData:Object
    },
    mounted(){
      console.log('clickTitleData',this.clickTitleData);
      console.log("dragTable",this.clickTitleData.clickTitleData);
    },
    data() {
      return {
        first:"初始化",
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
