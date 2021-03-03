<template>
  <div>
    <div class="timeLine">
      <div class="fourLine" v-for="n in 4" :style="{'margin-left':n*5+'px'}"></div>
      <div class="locationWrap">
        <div class="locationLine"></div>
        <div class="location-name" v-for="(item,index) in location" :key="index">
          <div class="location-time">{{item.time}}</div>
          <div class="circle">
            <div class="circle-inner"></div>
          </div>
          <div class="locate-name">{{item.locate}}</div>
        </div>
      </div>
      <div class="fourLineRight" v-for="n in 4" :style="{'margin-right':n*5+'px'}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "time-line",
    props:{
      location:Array,
      username:String,
    },
    mounted() {
      console.log('获取到了全部的props', this.props, this.$props)
    },
    data() {
      return {
        num:this.username,
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.timeLine
  position relative
  width 100%
  height 100px
  .fourLine,.fourLineRight
    position absolute
    top 0
    bottom 0
    margin auto
    display inline-block
    width 2px
    height 6px
    margin-left 5px
    background-color #2190FF
  .fourLineRight
    position absolute
    right 0
  .locationWrap
    width 96%
    height 100%
    margin 0 22px
    display -webkit-flex
    display flex
    .locationLine
      position absolute
      top 0
      bottom 0
      margin auto 0 auto 2px
      height 5px
      width 96%
      background-color #2190FF
    .location-name
      flex 1
      position relative
      height 100%
      text-align center
      .location-time
        color #2190ff
        padding-top 15px
      .circle,.circle-inner
        position absolute
        top 0
        bottom 0
        right 0
        left 0
        margin auto
        width 11px
        height 11px
        border-radius 50%
        border 1px solid #999
        background-color #fff
        .circle-inner
          width 7px
          height 7px
          opacity 0.7
          border none
          background-color #2190ff
      .locate-name
        position absolute
        bottom 15px
        left 0
        right 0
        margin auto
</style>
