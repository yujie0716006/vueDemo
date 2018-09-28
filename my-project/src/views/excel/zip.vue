<template>
  <div>
    <el-button @click="handleDownload">导出Zip</el-button>
    <div class="zip-wrap">
      <el-table
        :data="tableData"
        style="width: 100%" border >
        <el-table-column
          prop="date"
          label="日期"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "zip",
    mounted(){
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
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
        }]
      }
    },
    methods:{
      handleDownload(){
        console.log('点击下载zip文件');
        import('@/vendor/Export2Zip').then(zip => {
          const tHeader = ['data','name','address'];
          const filterValue = ['date','name','address'];
          const list = this.tableData;
          const data =  this.formatJson(filterValue,list);
          zip.export_txt_to_zip(tHeader,data, '导出zip','zip文件');
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.zip-wrap
  width 80%
  margin 40px
  text-align center
</style>
