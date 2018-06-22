<template>
  <div class="top">
    <img src="./images/button.png" alt="开关" @click="closeOrOpen" :class='{imgRotate:isCollapse}'>
    <span>首页</span>
  </div>
</template>

<script>
  export default {
    name: "top-title",
    data() {
      return {}
    },
    computed:{
      isCollapse:{
        get: function(){
          return this.$store.getters.isCollapse;
        },
        set:function(val){
          this.$store.state.isCollapse=val;
        }
      }
    },
    methods:{
      closeOrOpen(){
        this.isCollapse =! this.isCollapse;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.top
  width 100%
  height 59px
  border-bottom 1px solid #666
  img
    display inline-block
    width 20px
    height 20px
    margin-top 20px
    margin-right 10px
    vertical-align bottom
    cursor pointer
  .imgRotate
    transform rotate(90deg)
    transition transform 0.3s
</style>
