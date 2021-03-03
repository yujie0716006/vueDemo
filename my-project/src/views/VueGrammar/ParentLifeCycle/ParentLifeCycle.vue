<template>
  <div>
    <div>父组件</div>
    <div>点击改变后的名字-{{name}}</div>
    <div class="button" @click="changeName">点击改变父组件名字</div>
    <keep-alive>
      <son-life-cycle></son-life-cycle>
    </keep-alive>
  </div>
</template>

<script>
  import sonLifeCycle from './SonLifeCycle'
  export default {
    name: "ParentLifeCycle",
    components: {sonLifeCycle},
    data() {
      return {
        name: '小明'
      }
    },
    beforeCreate() {
      console.log('父组件beforeCreate', this.name)
    },
    created() {
      console.log('父组件created', this.name)
    },
    beforeUpdate() {
      console.log('父组件beforeUpdate', this.name)
    },
    updated() {
      console.log('父组件updated', this.name)
    },
    beforeMount() {
      console.log('父组件beforeMount', this.name)
    },
    mounted() {
      console.log('父组件mounted', this.name)
    },
    beforeDestroy() {
      console.log('父组件beforeDestroy', this.name)
    },
    destroyed() {
      console.log('父组件beforeDestroy', this.name)
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
