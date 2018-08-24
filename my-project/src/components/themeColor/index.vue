<template>
  <div class="color-wrap">
    <span class="theme-color" @click="dialogVisible = true">主题换肤</span>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
      <div class="theme-classify">
        <div class="theme-color" v-for="(item,index) in themeColor" :key="index" :style="{backgroundColor:item}" @click="handleChangeColor(item)"></div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleDialogVisible">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "theme-color",
    watch:{
      changeColor(val){
        this.toggleClass(document.body,`custom-${val}`);
        this.loadCss(`src/assets/theme/${val}/index.css`);
      }
    },
    mounted(){
      this.toggleClass(document.body,`custom-${this.changeColor}`);
    },
    data() {
      return {
        dialogTitle:'更改主题颜色',
        dialogVisible:false,   // 更改主题的弹框
        themeColor:['red','orange','yellow','green','greenyellow','purple'],
        changeColor:localStorage.getItem('colorValue') ? localStorage.getItem('colorValue') : 'green',   // 选中的颜色
      }
    },
    methods:{
      // 更改选中的主题的颜色
      handleChangeColor(color){
        this.changeColor=color;
      },
      handleDialogVisible(){
        this.dialogVisible= false;
        localStorage.setItem("colorValue",this.changeColor);
      },
    //  动态加载css主题的样式资源
      loadCss(path){
        console.log('path',path);
        let head= document.getElementsByTagName('head')[0];   // 获取到head这个标签
        console.log('head',head);
        let link= document.createElement('link');
        link.href=path;
        link.ref='stylesheet';
        link.type='text/css';
        head.appendChild(link);
      },
    //  换肤添加命名空间样式的函数
      toggleClass(element,className){
        if(!element || !className){
          return
        }
        element.className=className;
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.color-wrap
  .theme-color
    cursor pointer
  .el-dialog
    .theme-classify
      display -webkit-flex
      display flex
      flex-wrap wrap
      justify-content center
      .theme-color
        display inline-block
        width 60px
        height 60px
        border-radius 50%
        margin 0 5px

</style>
