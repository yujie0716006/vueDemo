<template>
  <div class="image-wrap" :style="{width:width,height:height}">
    <img :src=imageUrl>
  </div>
</template>

<script>
  export default {
    name: "image-show",
    data() {
      return {}
    },
    props:{
      imageUrl:{
        type:String,
        required:true   // 表示图片的路径是必须的
      },
      width:{
        type:String,
        default:'100px'
      },
      height:{
        type:String,
        default:'100px'
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.image-wrap
  display inline-block
  vertical-align bottom
  img
    width 100%
    height 100%
    border-radius 50%
</style>
