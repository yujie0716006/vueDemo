<template>
  <div>
    <imageShow :imageUrl="imageUrl" :width="width" :height="height"></imageShow>
    <uploadImage :uploadImageUrl="uploadImageUrl" :uploadParams="uploadParams" @newImage="getNewImage"></uploadImage>
  </div>
</template>

<script>
  import imageShow from '@/components/imageShow';
  import uploadImage from '@/components/uploadImage/uploadImage';
  export default {
    name: "upload",
    components:{imageShow,uploadImage},
    data() {
      return {
        // imageUrl:require('./images/userLogo.jpg'),
        imageUrl:'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
        height:'150px',
        width:'150px',
        uploadImageUrl:'https://httpbin.org/post',
        uploadParams:{
          onlyName:'上传的图片'
        }
      }
    },
    methods:{
      // 从子组件中获取的图片的路径,这个图片路径是经过base 64编码后的
      getNewImage(newImageUrl){
        this.imageUrl= newImageUrl;
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
