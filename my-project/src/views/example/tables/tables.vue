<template>
  <div class="table">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "tables",
    data() {
      return {}
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.table{
  width 100%
  height 100%
}
</style>
