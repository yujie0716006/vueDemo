<template>
  <div>
    <div>v-model是语法糖，他是使用:value绑定数据，并使用@input绑定事件。所以在使用自定义v-model时，子组件默认的必须使用value值(接受props的值必须为value)才可以。每次点击"我是children子组件"都会调用$emit('input')触发父组件中的input事件，传递参数，完成数据的双向绑定。</div>
    <div @click="$emit('input', value + 10)">我是children子组件</div>
  </div>
</template>

<script>
  export default {
    name: "Children",
    props: {
      value: Number
    },
    data() {
      return {}
    },
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
div, span {
  margin: 8px 0;
}
</style>
