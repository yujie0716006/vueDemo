<template>
  <div class="top-wrap">
    <div class="top">
      <img src="./images/button.png" alt="开关" @click="closeOrOpen" :class='{imgRotate:isCollapse}' v-show="navMenuPosition == 'left'">
      <slot name="topNavMenu"></slot>
      <div class="screenFull">
        <screenFull></screenFull>
      </div>
      <div class="theme-color">
        <themeColor></themeColor>
      </div>
    </div>
    <div class="router-tag">
      <routerTags></routerTags>
    </div>
  </div>
</template>

<script>
  import screenFull from '@/components/screenFull/screenFull';
  import themeColor from '@/components/themeColor';
  import routerTags from '@/components/routerTags';

  import {mapGetters} from 'vuex';
  export default {
    name: "top-title",
    components:{screenFull,themeColor,routerTags},
    data() {
      return {}
    },
    computed:{
      isCollapse:{
        get: function(){
          return this.$store.getters.isCollapse;
        },
        set:function(val){
          this.$store.dispatch('menuOpenClose',val);
          localStorage.setItem('menuButton',val);
        }
      },
      ...mapGetters([
        'navMenuPosition'
      ])
    },
    methods:{
      closeOrOpen(){
        this.isCollapse =! this.isCollapse;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .top-wrap
    height 100%
    .top
      position relative
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
      .screenFull
        position absolute
        right 150px
        top 18px
        transform rotate(45deg)
      .theme-color
        position absolute
        right 65px
        top 25px
    .router-tag
      width 100%
      height 33px
      border-bottom 1px solid #999
      overflow hidden
</style>
