<template>
  <div id="myChart" class="radar">

  </div>
</template>

<script>
  import echarts from "echarts";
  export default {
    name: "radar-echart",
    mounted(){
      this._initEcharts();
    },
    data() {
      return {
        myChart:null,
      }
    },
    methods:{
      _initEcharts(){
        this.myChart=echarts.init(document.getElementById('myChart'));
        this.setOptions();
      },
      // 当监听到数据变化时，实时调用这个设置函数
      setOptions(){
        this.myChart.setOption({
          legend: {
            data: ['Allocated Budget', 'Expected Spending','Actual Spending'],
            x : 'center',
            y : 'bottom',
          },
          radar:{
            shape: 'polygon',
            axisLabel:{
              fontWeight:'bold'
            },
            indicator: [
              { name: '销售（sales）', max: 6500},
              { name: '管理（Administration）', max: 16000, color: 'red'}, // 标签设置为红色
              { name: '信息技术（Information Techology）', max: 30000},
              { name: '客服（Customer Support）', max: 38000},
              { name: '研发（Development）', max: 52000},
              { name: '市场（Marketing）', max: 25000}
            ],
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            areaStyle: {normal: {
                color: 'rgba(25, 105, 245, 0.5)'
              }},
            data : [
              {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : 'Allocated Budget'
              },
              {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : 'Expected Spending'
              },
              {
                value : [500, 1400, 8000, 3000, 4200, 2100],
                name : 'Actual Spending'
              },
            ]
          }]
        })
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.radar
  width 100%
  height 400px
</style>
