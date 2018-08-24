<template>
  <div class="node-wrap">
    <div class="node-content">
      <el-input type="textarea"
                v-model="inputTextarea"
                placeholder="最少输入10字符"
                maxlength="200"
                minlength="10"
                :disabled="isDisabled">
      </el-input>
    </div>
    <p class="edit-num">还可输入<span class="text-color">{{200-inputTextarea.length}}</span>个字符</p>
    <div class="node-button">
      <div class="button-inner">
        <el-button size="middle" @click="editText">编辑 <i class="el-icon-edit"></i> </el-button>
        <el-button size="middle" @click="clearText">清除 <i class="el-icon-refresh"></i> </el-button>
        <el-button size="middle" @click="saveText">保存 <i class="el-icon-check"></i> </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "note-book",
    data() {
      return {
        inputTextarea: localStorage.getItem('inputTextarea') ? localStorage.getItem('inputTextarea') : '',  // 文本域中的内容
        isDisabled: localStorage.getItem('inputTextarea') ? true : false,   // 文本框是否禁用
      }
    },
    methods:{
      editText(){
        console.log('qqqq',this.isDisabled);
        this.isDisabled = false;
      },

      clearText(){
        if(this.inputTextarea == '') return
        if(this.isDisabled) return
        this.$confirm('是否确定清除所写的内容，清除后内容为空','提示',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning'
        }).then(() => {
          this.inputTextarea = "";
          this.$message({
            type:'success',
            message:'清除成功'
          });
        }).catch(() => {
          this.$message({
            type:'info',
            message:'已取消清除'
          })
        })
      },

      saveText(){
        if(this.inputTextarea == '' || this.isDisabled) return
        if(this.inputTextarea == '' || this.inputTextarea.length < 10){
          this.$message({
            type:'error',
            message:'输入的内容不能少于10个字符'
          });
          return
        };
        this.$confirm('是否保存内容','提示',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning'
        }).then(() => {
          this.isDisabled = true;
          localStorage.setItem('inputTextarea',this.inputTextarea.trim());
          this.$message({
            type:'success',
            message:'保存成功'
          });
        }).catch(() => {
          this.$message({
            type:'info',
            message:'已取消保存'
          })
        })
      },
    }
  }
</script>
<style>
.el-textarea__inner{
  height:220px;
}
</style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.node-wrap
  position relative
  width 100%
  height 100%
  .node-content
    height 230px
  .edit-num
    position absolute
    right 10px
    .text-color
      color red
  .node-button
    position absolute
    width 100%
    bottom 0


</style>
