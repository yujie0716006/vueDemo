<template>
  <div  class="divider-wrap">
    <div class="divider">分割线</div>
  </div>
</template>

<script>
  export default {
    name: "Divider",
    data() {
      return {}
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.divider-wrap
  width 100%
  .divider
    position relative
    width 100%
    margin: 20px 0
    text-align center
    &::before, &::after
      position absolute
      width 46%
      height 100%
      display inline-block
      content ''
      border-top 1px solid #000000c7
      transform translateY(50%)
    &::before
      left 0
    &::after
      right 0



</style>
