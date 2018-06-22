<template>
  <div id="myCharts" class="echartsWrap">
  </div>
</template>

<script>
  import echarts from "echarts";
  import {mapGetters} from "vuex"
  export default {
    name: "echarts",
    mounted(){
      this._initEcharts('newVisits');
    },
    watch:{
      clickState:function(val){
        this.myChart.dispose();
        this._initEcharts(val);
      },
    },
    data() {
      return {
        weekData:['周一','周二','周三','周四','周五','周六','周日'],
        myChart:null   // echarts的容器
      }
    },
    computed:{
      ...mapGetters([
        'clickState',
      ])
    },
    methods:{
    //   初始化直线图
      _initEcharts(val){
        this.myChart=echarts.init(document.getElementById('myCharts'));
        let option={
          tooltip:{
            trigger:'axis'
          },
          legend:{
            data:['first','last'],
            padding:[20,0]
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data:this.weekData
          },
          yAxis: {
            type: 'value'
          },
          series:[
            {
              name:'first',
              type:'line',
              smooth:true,
              data:this.$store.state.echarts[val].first,
              lineStyle:{
                color:'green',
                width:2
              },
              itemStyle:{
                color:'green',
              }
            },
            {
              name:'last',
              type:'line',
              smooth:true,
              data:this.$store.state.echarts[val].last,
              lineStyle:{
                color:'orange',
                width:2
              },
              itemStyle:{
                color:'orange',
              }
            },
          ]
        };
          this.myChart.setOption(option);
      },
      /*  END  初始化直线图*/
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.echartsWrap
  margin 40px 0
  width 100%
  height 350px
  background-color #fff
</style>
