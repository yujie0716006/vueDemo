<template>
  <div class="tableWrap">
    <el-table
      :data="tableData" stripe border fit highlight-current-row
      style="width: 100%" height="80%">
      <el-table-column    prop="id"     label="ID"    width="60" align="center">
      </el-table-column>
      <el-table-column    prop="date"     label="DATE"    width="150" align="center">
      </el-table-column>
      <el-table-column    prop="name"     label="NAME"    width="150" align="center">
      </el-table-column>
      <el-table-column    prop="address"    label="ADDRESS" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.edit==='1'">{{scope.row.address}}</span>
          <template v-else>
              <el-input v-model="scope.row.address" class="addressInput"></el-input>
              <el-button type="warning" size="small" icon="el-icon-refresh" @click="handleCancel(scope.row)">cancel</el-button>
          </template>
        </template>
      </el-table-column>
      <el-table-column    prop="status"     label="STATUS"    width="150" align="center"
                          :filters="[{ text: 'success', value: 'success' }, { text: 'delete', value: 'delete' },{text: 'normal',value: 'normal'}]"
                          :filter-method="filterStatus">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilters">
            {{scope.row.status}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column    prop="edit"     label="EDIT"    width="150" align="center">
        <template slot-scope="scope">
          <el-button v-if="scope.row.edit==='1'" size="small" type="primary" icon="el-icon-edit" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button v-else size="small" type="success" icon="el-icon-check" @click="handleFinish(scope.row)">完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import Sortable from 'sortablejs';
  export default {
    name: 'editTable',
    components:{Sortable},
    mounted(){
      this._initTable();
    },
    data() {
      return {
        tableData: [   // 表格的数据
          {
          id:'1',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'success',
          edit:'1',
        },
          {
          id:'2',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'delete',
          edit:'1',
        },{
          id:'3',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'success',
          edit:'1',
        },{
          id:'4',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'normal',
          edit:'1',
        },{
          id:'5',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'normal',
          edit:'1',
        },{
          id:'6',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'delete',
          edit:'1',
        }],
        editInput:'',   // 地址中的input输入框
        sortable:null
      }
    },
  //  过滤器
    filters:{
      statusFilters(status){
        const tagStatus={
          success: 'success',
          delete: 'danger',
          normal: 'info'
        };
        return tagStatus[status]
      }
    },
    methods:{
      filterStatus(val,row){
        return row.status===val;
      },
      handleEdit(row){
        row.edit='0';
        this.editInput=row.address;
      },
      handleFinish(row){
        row.edit='1';
        this.$message({
          message: '编辑完成！',
          type: 'success'
        })
      },
      handleCancel(row){
        row.address=this.editInput;
        row.edit='1';
        this.$message({
          message: "取消编辑",
          type: 'warning'
        })
      },
    //  初始化table拖拽功能
      _initTable(){
        let el=document.querySelectorAll('.el-table__body-wrapper>table>tbody')[0];
        this.sortable=new Sortable(el,{
          group: "tableList",
          animation: 150,
          ghostClass:'move-class',
          onAdd: function (evt){ console.log('onAdd.foo:', [evt.item, evt.from,evt.oldIndex,evt.newIndex]); },
          onUpdate: function (evt){ console.log('onUpdate.foo:', [evt.item, evt.from,evt.oldIndex,evt.newIndex]); },
          onRemove: function (evt){ console.log('onRemove.foo:', [evt.item, evt.from,evt.oldIndex,evt.newIndex]); },
          onStart:function(evt){ console.log('onStart.foo:', [evt.item, evt.from,evt.oldIndex,evt.newIndex]);},
          onSort:function(evt){ console.log('onStart.foo:', [evt.item, evt.from,evt.oldIndex,evt.newIndex]);},
          onEnd: function(evt){ console.log('onEnd.foo:', [evt.item, evt.from,evt.oldIndex,evt.newIndex]);}
        })
      },
    },
  }
</script>
<style>
  .el-table__row{
    cursor:move;
  }
  .move-class{
    background-color:#a9acce !important;
  }

</style>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.tableWrap
  width 100%
  height 100%
  padding 50px 40px 0
  .addressInput
    width 73%



</style>
