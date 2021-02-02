<template>
  <div>
    <div>我是vue语法中的mixins</div>
    <div>{{this.message}}</div>
    <div>computed属性</div>
    <div>
      <span>{{this.text}}</span>
      <span>{{this.name}}</span>
    </div>
  </div>
</template>

<script>
  import {vueMixinsImport} from './VueMixinsImport'

  export default {
    name: "VueMixins",
    // vueMixinsImport中都是公用的数据和方法，使用mixins引入后可以在这里面使用，并且每个数据都是独立的,不共享
    mixins: [vueMixinsImport],
    data() {
      return {}
    },
    mounted() {
      console.log('我是mixins，使用mixins引入的内容会优先加载')
      this.selfFun()
      this.fun()
      this.ageFun()
     console.log('mixins中引入的异步函数', this.asyncFun().then(res => console.log('异步的函数', res)))
    },
    computed: {
      name() {
        return '组件自身定义的数据、属性和函数，如果和mixins引入的相同名字的话，会将其覆盖使用组件自己的'
      }
    },
    methods: {
      selfFun() {
        console.log('我是mixins,selfFun')
      },
      fun() {
        console.log('我是fun函数，self', )
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>

</style>
