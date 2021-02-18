<template>
  <div class="dashboardWrap">
    <!--卡片组件-->
    <cards></cards>

<!--    我是分割线-->
    <Divider></Divider>

    <!--echarts组件-->
    <echarts></echarts>
    <el-row class="echartWrap">
      <el-col :lg="8" :md="12" :sm="24">
        <radarEchart></radarEchart>
      </el-col>
      <el-col :lg="8" :md="12" :sm="24">
        <roseType></roseType>
      </el-col>
    </el-row>

    <!--tabs组件-->
    <h1 style="fontSize:20px">tabs组件</h1>
    <el-row>
      <tabs :tabsTitles="tabsData">
        <template slot-scope="clickTitleData">
          <dragTable :clickTitleData="clickTitleData"></dragTable>
        </template>
      </tabs>
    </el-row>

    <!--时间轴-->
    <timeLine :location="location" :username="username"></timeLine>

  </div>
</template>

<script>
  import cards from "./components/cards";
  import echarts from "./components/echarts";
  import radarEchart from "./components/radarEchart";
  import roseType from "./components/roseType";
  import timeLine from "../../components/timeLine/timeLine";
  import tabs from "../../components/tab/tab";
  import dragTable from "../example/tables/tabsContent";
  import Divider from '../../components/Divider/Divider'

  import axios from "axios"

  export default {
    name: "dashboard",
    components: {cards, echarts, radarEchart, roseType, tabs, dragTable, timeLine, Divider},
    mounted() {
    },
    data() {
      return {
        tabsData: ['用户管理', '配置管理', '角色管理', '定时任务补偿'],
        location: [
          {
            time: '2017-3-24 14:45:10',
            locate: "传媒大学",
          },
          {
            time: '2017-3-24',
            locate: "传媒学",
          },
          {
            time: '2017-3-24 14:45:10',
            locate: "这是什么大学",
          },
          {
            time: '2017-3-24',
            locate: "北京的一所大学",
          },
          {
            time: '2021-02-02',
            locate: "重新开始",
          },
        ],
        username: '小明',
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dashboardWrap
    padding 40px 30px 30px
    height 100%
    background-color #EFF1F4
    overflow-y auto

    .echartWrap
      height 350px
      margin-bottom 70px

    .input-class
      width 300px
      height 15px
</style>
