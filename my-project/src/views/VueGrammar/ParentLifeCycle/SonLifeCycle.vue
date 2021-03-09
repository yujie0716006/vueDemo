<template>
  <div>
    <div>子组件</div>
    <div>点击改变后的名字-{{name}}</div>
    <div class="button" @click="changeName">点击改变子组件名字</div>
  </div>
</template>

<script>
  export default {
    name: "SonLifeCycle",
    props: {
      address: {
        type: String,
        default: () => ''
      }
    },
    data() {
      return {
        name: '子组件'
      }
    },
    beforeCreate() {
      console.log('子组件beforeCreate', this.name)
    },
    created() {
      console.log('子组件created', this.name)
    },
    beforeUpdate() {
      console.log('子组件beforeUpdate', this.name)
    },
    updated() {
      console.log('子组件updated', this.name)
    },
    beforeMount() {
      console.log('子组件beforeMount', this.name)
    },
    mounted() {
      console.log('子组件mounted', this.name)
    },
    beforeDestroy() {
      console.log('子组件beforeDestroy', this.name)
    },
    destroyed() {
      console.log('子组件beforeDestroy', this.name)
    },
    // 当激活keep-alive时使用
    activated() {
      console.log('子组件activated', this.name)
    },
    // 当keep-alive组件停用时调用
    deactivated() {
      console.log('子组件deactivated', this.name)
    },
    methods: {
      changeName() {
        this.name = '改变'
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
div{
  padding: 10px 20px;
}
.button
  padding 8px
  display inline-block
  border 1px solid
  cursor pointer
</style>
