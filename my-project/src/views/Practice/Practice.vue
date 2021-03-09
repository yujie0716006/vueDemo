<template>
  <div class="border">0.5像素边框~~~~</div>
</template>

<script>
  export default {
    name: "Practice",
    beforeRouteEnter(to, from, next) {
      console.log('to,我在进入到联系这个页面才会调用的路由对象，先进入这个页面再渲染组件', to)
      next()
    },
    data() {
      return {}
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .border {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
  }
  .border::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border: 1px solid red;
    transform-origin: 0 0;
    transform: scale(0.5);
  }
</style>
