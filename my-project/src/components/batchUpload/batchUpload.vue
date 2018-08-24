<template>
  <div class="batch-wrap">
    <div class="dropzone" id="myDropzone" :action="batchUrl">
      <input type="file" name="file">
    </div>
  </div>
</template>

<script>
  import Dropzone from 'dropzone';
  import 'dropzone/dist/dropzone.css';
  Dropzone.autoDiscover= false;
  export default {
    name: "batch-upload",
    props:{
      batchUrl:String,
    },
    mounted(){
      const myDropzone= document.getElementById('myDropzone');
      this.dropzone= new Dropzone(myDropzone,{
        thumbnailWidth: 150,   // 上传文件后，展示图片的缩略图尺寸
        maxFilesize:1,    // MB 上传文件的最大尺寸
        headers: { "My-Awesome-Header": "header value" },
        addRemoveLinks:true,
        dictRemoveFile:'删除',
        uploadMultiple:true,  // 能够发送多个文件
        dictDefaultMessage:'<i class="el-icon-upload" style="color:#000;width:25px"></i>选择要添加的图片',
      })
    },
    data() {
      return {
        dropzone:'',
      }
    },
    methods:{

    },
    beforeDestroy(){
      this.dropzone.destroy();
    },
  }
</script>

<!-- 覆盖上传图片的样式 -->
<style>
  .vue-dropzone .dz-preview .dz-details{
    background-color: rgba(0,0,0,0.3);
  }
</style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.batch-wrap
  width 80%
  margin-bottom 20px
  .dropzone
    input[name='file']
      display none
</style>
