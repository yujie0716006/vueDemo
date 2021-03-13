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
  @keyframes divColorAnimation {
    from {
      background-color: #3a8ee6;
      left 0
      top 0
    }
    to {
      background-color #4f2280;
      left 200px
      top 200px
    }
  }
/*  .border {
    position: relative // 要开启相对定位
    animation: divColorAnimation;
    animation-duration: 3s;
    animation-delay: 1s;
    animation-timing-function linear;
    animation-fill-mode backwards
    !*将一个动画重复的播放就是：重复的一直循环执行，然后再设置执行的顺序*!
    animation-iteration-count infinite
    animation-direction alternate
  }*/
</style>
