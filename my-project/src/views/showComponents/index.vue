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



  </div>

</template>

<script>

  import imgZoom from 'vue2.0-zoom';
  import picZoom from "vue-piczoom";
  import backToTop from '@/components/backToTop';
  import layoutTheme from '@/components/layoutTheme';
  export default {
    name: "index",
    components:{picZoom,imgZoom,backToTop,layoutTheme},
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
        scrollName:'this.$refs.backTo'
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
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.back
  width 100%
  height 100%
  overflow-y auto
  padding-left 20px
</style>
