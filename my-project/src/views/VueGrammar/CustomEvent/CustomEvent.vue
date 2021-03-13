<template>
  <div class="custom-event">
    <div>input实现v-model</div>
    <div>
      <span>写法一：触发input调用事件</span>
      <input type="text" placeholder="写法一的输入框" :value="value1" @input="handleChange">
      <span>写法一的值：{{value1}}</span>
    </div>
    <hr>
    <div>
      <div>写法二：直接在input上面调用事件</div>
      <input type="text" :value="value2" @input="value2=$event.target.value">
      <span>写法二的值：{{value2}}</span>
    </div>
    <hr>
    <!--在自定义组件上使用v-model双向数据绑定-->
    <Children v-model="number"></Children>
    <div>number的值：{{number}}</div>
  </div>
</template>

<script>
  import Children from './Children'
  export default {
    name: "CustomEvent",
    components: {
      Children
    },
    data() {
      return {
        value1: 1,
        value2: 2,
        number: 10,
      }
    },
    methods: {
    //  写法一：调用input事件更改value的值
      handleChange(event) {
        this.value1 = event.target.value
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.custom-event {
  padding: 10px 30px;
  div, span, input {
    margin: 8px 0;
  }
  input {
    border: 1px solid;
  }
}
</style>
