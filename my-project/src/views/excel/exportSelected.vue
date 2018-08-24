<template>
  <div class="excelout-wrap">
    <el-button type="success" @click="handleDownload">导出勾选excel</el-button>
    <div class="excel-table" ref="tableWrap">
      <el-table :data="tableData" stripe style="width: 100%" border height="100%" ref="mutipleTable"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="date" label="日期" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="地址" align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "export-excel",
    data() {
      return {
        tableData: [
          {   // table中的prop要和数据源中的属性保持一致
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },],
        tableSelected:[],
      }
    },
    methods:{
      handleDownload(){
        // 当有勾选的数据时，才导出模板。如果没有勾选的数据时，点击导出模板没有用
        if(this.tableSelected.length > 0){
          import('@/vendor/Export2Excel').then(excel => {
            const tHeader = ['date','name','address'];   // 表格的头部信息
            const filterVal = ['date','name','address'];   // 对应后台的字段名
            const list = this.tableSelected;   // table要渲染的数据
            const data = this.formatJson(filterVal,list);
            excel.export_json_to_excel(tHeader,data,'转化为表格的文件');
            this.$refs.mutipleTable.clearSelection();   // 打印完表格后，清除选择项
          })
        }
  },
      formatJson(filterVal,jsonData){   // 这个函数的作用是返回，要导出的属性值
        return jsonData.map(v => filterVal.map(j => v[j]))
      },
      handleSelectionChange(val){
        this.tableSelected = val;
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .excelout-wrap
    position relative
    height 100%
    padding 20px
    .excel-table
      position absolute
      padding 20px 0 20px 0
      top 60px
      bottom 0
      right 20px
      left 20px

</style>
