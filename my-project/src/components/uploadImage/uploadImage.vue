<template>
  <div class="img-button-upload">
    <el-button class="change-button" @click="handleClick">改变头像</el-button>
    <myUpload
      field="image"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="isShow"
      :width="uploadWidth"
      :height="uploadHeight"
      :url="uploadImageUrl"
      :params="uploadParams"
      img-format="png"
    ></myUpload>
  </div>
</template>

<script>
  import myUpload from 'vue-image-crop-upload';
  export default {
    name: "uploadImage",
    components:{myUpload},
    props:{
      uploadImageUrl:String,
      uploadWidth:{
        type:Number,
        default:300
      },
      uploadHeight:{
        type:Number,
        default:300
      },
      uploadParams:{   // 上传附带其他的数据
        type:Object,
        default:{}
      }
    },
    data() {
      return {
        isShow:false,
      }
    },
    methods:{
    //  图片截取完成事件   field ：表示上传文件的名字  imageUrl :表示的是图片转换为base64位的编码格式
      cropSuccess(imageUrl){
        this.$emit('newImage',imageUrl);
        console.log('imageUrl',this.isShow,imageUrl);

      },
    //  图片上传成功后    jsonData：是服务器返回的数据，已进行json转码，里面包含有 前端传给后台的参数
      cropUploadSuccess(jsonData,field){
        console.log('jsonData',this.isShow,jsonData);
      },
    //  图片上传失败
      cropUploadFail(status){
        console.log('state',this.isShow,status);
      },
      handleClick(){
        this.isShow = !this.isShow;
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.img-button-upload
  display inline-block
</style>
