/*用来混入mixins的，里面的数据和方法都是可以复用的，而且每次引用都是独立的
* */
export const vueMixinsImport =  {
  name: "VueMixinsImport",
  created() {
    console.log('我是mixins引入的，引入,created')
  },
  mounted() {
    console.log('我是mixins引入的，引入的，mounted')
  },
  data() {
    return {
      message: '我是mixinsImport'
    }
  },
  computed: {
    text() {
      return '我是text引入的'
    },
    name() {
      return '我是name引入的'
    }
  },
  methods: {
    fun() {
      console.log('我是fun函数，引入的')
    },
    ageFun() {
      console.log('我是ageFun函数，引入的')
    },
    asyncFun() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('我是asyncFun函数')
        }, 1000)
      })
    }
  }
}
