<template>
  <div>
    <div>我是vue语法中的mixins</div>
    <div>{{this.message}}</div>
    <div>computed属性</div>
    <div>测试每次修改的那个文件打包后，他的hash值会改变，每次会引用新的hash值，但是其他没有修改的文件的引用都不会改变</div>
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
    beforeRouteEnter(to, from ,next) {
      console.log('beforeRouteEnter：当其他页面跳转到当前页面时，会先进入到这个路由钩子里面，而且路径先不变化的停留在其他页面中，但是会调用这个页面的钩子。可以在这里调用一些异步行为。但是因为这个页面的组件还没有渲染到页面上面，所以不能使用this，this不存在', to, from)
      // 必须调用next管道函数，才能继续向后执行
      next()
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
