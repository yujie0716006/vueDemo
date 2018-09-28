<template>
  <div class="input-wrap">
    <span>sssssss</span>
    <el-input v-model="message" @change="handleValue"></el-input>
    <span class="textInput">增减的input框</span>
    {{`message:${message}`}}
  </div>
</template>

<script>
  export default {
    name: "input-class",
    data() {
      return {
        message:''
      }
    },
    methods:{
      handleValue(){
        this.$emit('listenInput',this.message);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.input-wrap
  width 100%
  span
    color red
    font-size 20px
  .el-input
    width 200px
  .textInput
    color green
    font-weight border
</style>
