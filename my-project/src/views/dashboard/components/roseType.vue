<template>
  <div id="myChartPie" class="echarts">
  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "rose-type",
    mounted(){
      this._initEcharts();
    },
    data() {
      return {
        myChart:null
      }
    },
    methods:{
      _initEcharts(){
        this.myChart=echarts.init(document.getElementById('myChartPie'));
        this.setOptions();
      },
      setOptions(){
        this.myChart.setOption({
          legend: {
            x : 'center',
            y : 'bottom',
            data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
          },
          calculable : true,
          series:[
            {
              name:'面积模式',
              type:'pie',
              roseType : 'area',
              data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
              ]
            }
          ]
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.echarts
  width 100%
  height 400px
</style>
