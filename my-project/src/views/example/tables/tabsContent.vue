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
    watch: {
      clickTitleData: {
        handler: function(data) {
          console.log('每次变的时候，都是响应了4次。')
          console.log('clickTitleData', data.clickTitleData)
        },
        deep: true
      }
    },
    mounted(){
      console.log('clickTitleData',this.clickTitleData);
      console.log("dragTable",this.clickTitleData.clickTitleData);
    },
    data() {
      return {
        first:"tabContent初始化数据",
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
