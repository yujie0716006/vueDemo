<template>
  <div class="shuttleBox">
    <div class="classify">
      <div class="classify-name" @click="handleRob('steal')">盗窃</div>
      <div class="classify-name" @click="handleRob('robRob')">抢劫抢夺</div>
      <div class="classify-name" @click="handleRob('fraud')">诈骗</div>
      <div class="classify-content">
          <el-checkbox v-for="(item,index) in stealClassify" :label="item.dtname" :key="index">{{item.dtname}}</el-checkbox>
      </div>
    </div>
    <div class="get-checkbox">
      <el-tag size="medium" closable>中等标签</el-tag>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shuttle-box",
    props:{
      shuttleBoxData:Object,
    },
    mounted(){
      console.log('穿梭框数据',this.steal,this.robRob,this.fraud);
      console.log('stealClassify',this.stealClassify);
    },
    data() {
      return {
        steal:this.shuttleBoxData['盗窃'],
        robRob:this.shuttleBoxData['抢劫抢夺'],
        fraud:this.shuttleBoxData['诈骗'],
        stealClassify:this.shuttleBoxData["盗窃"]["小案类别"],
        getCheckbox:[],
      }
    },
    methods:{
      handleRob(name){
        switch(name){
          case 'steal' : this.stealClassify=this.shuttleBoxData["盗窃"]["小案类别"];break;
          case 'robRob' : this.stealClassify=this.shuttleBoxData["抢劫抢夺"]["小案类别"];break;
          case 'fraud' : this.stealClassify=this.shuttleBoxData["诈骗"]["小案类别"];break;
          default:this.stealClassify=this.shuttleBoxData["盗窃"]["小案类别"];break;
        }
      },
    },
  }
</script>
<style>

</style>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shuttleBox
    width 100%
    height 100%
    background-color #fff
    .classify
      width 100%
      height 100px
      display -webkit-flex
      display flex
      flex-direction row
      .classify-name
        float left
        width 100px
        height 100%
        line-height 100px
        text-align center
        border 1px solid
        cursor pointer
      .classify-content
        flex 1
        border 1px solid
        float left
        height 100%
        .el-checkbox
          width 20%
        .el-checkbox:first-child
          margin-left 30px
    .get-checkbox
      padding 20px
      min-height 150px
      width 100%
      background-color #fff
      height auto
</style>
