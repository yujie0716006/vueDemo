<template>
  <div ref="backTo" class="back" @scroll="handleScroll">
    <!--图片放大器-->
    <div>
      <h1 style="margin:15px;fontSize:20px">图片放大镜(放大图有差异)</h1>
      <imgZoom :src="'static/images/01.jpg'" :width="'400'" :height="'250'" :bigsrc="'static/images/01.jpg'" :configs="configs"></imgZoom>
      <h1 style="margin:15px;fontSize:20px" >图片放大镜(不稳定)</h1>
      <div style="width:500px;height:350px">
        <picZoom url="static/images/01.jpg" bigUrl='static/images/01.jpg' :scale="3"></picZoom>
      </div>
    </div>

    <!--返回顶部-->
    <backToTop :scrollDis="scrollDis" @listenScroll="scrollToTop"></backToTop>

    <!--按钮-->
    <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </div>

    <!--主题布局-->
    <div>
      <layoutTheme></layoutTheme>
    </div>

    <!--button按钮-->
    <el-button icon="icon iconfont icon-renyuan" size="small">按钮</el-button>

    <!--上传图片的组件-->

    <h1 style="margin:15px;fontSize:20px">图片上传</h1>
    <div>
      <upload></upload>
    </div>

    <!--批量上传图片-->
    <h1 style="margin:15px;fontSize:20px">批量上传图片</h1>
    <batchUpload batchUrl="https://httpbin.org/post"></batchUpload>

    <!--记事本-->
    <h1 style="margin:15px;fontSize:20px">记事本</h1>
    <div class="note-component">
      <noteBook></noteBook>
    </div>

<!-- 测试的数据-->
    <div>
      <span :title="message">鼠标一上去会有titile提示</span>
    </div>

    <!--测试数组-->
    <div>
      <p>arr的值为：{{arr}}</p>
      <el-button @click="changeArr">changeArr</el-button>
      <p>修改后的arr值为：{{arr}}</p>
    </div>
    <div style="margin:20px 0">
      <ul>
        遍历循环数组中的数据
        <li v-for="(number,index) in eventNumber" :key="index">{{number}}</li>
      </ul>
    </div>
  </div>

</template>

<script>

  import imgZoom from 'vue2.0-zoom';
  import picZoom from "vue-piczoom";
  import backToTop from '@/components/backToTop';
  import layoutTheme from '@/components/layoutTheme';
  import upload from '@/views/upload';
  import batchUpload from '@/components/batchUpload/batchUpload';
  import noteBook from '@/components/noteBook/noteBook';
  export default {
    name: "show-components",
    components:{picZoom,imgZoom,backToTop,layoutTheme,upload,batchUpload,noteBook},
    mounted(){
      console.log('路由的内容：',this.$route);
    },
    data() {
      return {
        configs: {   // 中间放大镜的设置和大图显示的大小
          width:600,
          height:350,
          maskWidth:100,
          maskHeight:100,
          maskColor:'yellow',
          maskOpacity:0.2
        },
        scrollDis:null,  // 页面滚动的距离
        scrollName:'this.$refs.backTo',
        message:'显示的数据'+['sssss',44444,55555555].toLocaleString(),
        arr:[1,2,3,3,4,5,6],
        numbers:[1,2,3,4,5,6,7,8,9],
      }
    },
    computed:{
      eventNumber(){
        return this.numbers.filter(number => {
          return number % 2 === 0;
        })
      }
    },
    methods:{
      handleScroll(){
        this.scrollDis=this.$refs.backTo.scrollTop;
      },
      scrollToTop(){
        this.$refs.backTo.scrollTo({
          top:0,
          behavior:'smooth',
        });
        console.log('复函数触发了么');
      },
      changeArr(){
        console.log('changeArr函数触发');
        // this.arr[0] = '修改的值';
        this.arr.splice(0,1,'修改数组中的内容')
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.back
  width 100%
  height 100%
  overflow-y auto
  padding-left 20px
  .note-component
    width 400px
    height 300px

</style>
