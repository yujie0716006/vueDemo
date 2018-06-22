<template>
  <el-row :gutter="50">
    <el-col :lg="6" :md="12" :sm="24">
        <div class="img" @click="handleClick('newVisits')">
          <div class="icon">
            <div class="icon-wrap colorOne">
              <i class="icon iconfont icon-renyuan"></i>
            </div>
          </div>
          <div class="message">
            <div class="messageTitle">New Visits</div>
            <h1 class="messageNumber">102.400</h1>
          </div>
        </div>
    </el-col>
    <el-col :lg="6" :md="12" :sm="24">
      <div class="img" @click="handleClick('messages')">
        <div class="icon">
          <div class="icon-wrap colorTwo">
            <i class="icon iconfont icon-renyuan"></i>
          </div>
        </div>
        <div class="message">
          <div class="messageTitle">Messages</div>
          <h1 class="messageNumber">102.400</h1>
        </div>
      </div>
    </el-col>
    <el-col :lg="6" :md="12" :sm="24">
      <div class="img" @click="handleClick('purchases')">
        <div class="icon">
          <div class="icon-wrap colorThree">
            <i class="icon iconfont icon-renyuan"></i>
          </div>
        </div>
        <div class="message">
          <div class="messageTitle">Purchases</div>
          <h1 class="messageNumber">102.400</h1>
        </div>
      </div>
    </el-col>
    <el-col :lg="6" :md="12" :sm="24">
      <div class="img" @click="handleClick('shoppings')">
        <div class="icon">
          <div class="icon-wrap colorFour">
            <i class="icon iconfont icon-renyuan"></i>
          </div>
        </div>
        <div class="message">
          <div class="messageTitle">Shoppings</div>
          <h1 class="messageNumber">102.400</h1>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "cards",
    data() {
      return {}
    },
    methods:{
      handleClick(handleClick){
        this.$store.dispatch('echartsClick',handleClick)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .el-row
    height 100px
    .el-col
      height 100%
      .img
        height 100%
        overflow hidden
        background-color #fff
        cursor pointer
        &:hover
          .colorOne
            transition 1s
            background-color green
          .colorTwo
            transition 1s
            background-color orangered
          .colorThree
            transition 1s
            background-color blueviolet
          .colorFour
            transition 1s
            background-color brown
        .icon
          float left
          height 100%
          width 50%
          padding 10px 15px
          .icon-wrap
            width 100%
            height 100%
            border-radius 8px
            >i
              display inline-block
              font-size 50px
        .message
          float left
          height 100%
          width 50%
          .messageTitle,.messageNumber
            text-align center
            height 49px
            line-height 49px
            color gray
          .messageNumber
            font-size 20px
            color #000
            font-weight border

</style>
