<template>
  <div class="layout-wrap">
    <ul class="layout-ul">
      <el-card  v-for="(item,index) in layoutTheme" :key="index" shadow="always" class="layout-li" @click.native="handleChangeTheme(item.layoutPosition)">
        <li>
          <div class="li-img">
            <img :src="item.img" alt="">
          </div>
          <p class="title">{{item.layoutPosition}}</p>
        </li>
      </el-card>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: "layout-theme",
    data() {
      return {
        layoutTheme:[{
          layoutPosition:'上下布局',
          img:require('./images/top.png')
        },
          {
            layoutPosition:'左右布局',
            img:require('./images/left.png')
          }]
      }
    },
    computed:{
      ...mapGetters([
        'isCollapse'
      ])
    },
    methods:{
      handleChangeTheme(location){
        if(this.isCollapse){   // isCollapse为true时表示的是  导航条收缩状态
          this.$message({
            message:'请先将左侧导航条展开，再调整布局',
            type:'warning'
          });
          return
        }
        if(location == '上下布局'){
          this.$store.dispatch('changeTheme','top');
          localStorage.setItem('layoutTheme','top');
        }else if(location == '左右布局'){
          this.$store.dispatch('changeTheme','left');
          localStorage.setItem('layoutTheme','left');
        }
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.layout-wrap
  padding 20px
  width 100%
  height 250px
  .layout-ul
    height 100%
    width 100%
    .layout-li
      margin-left 20px
      text-align center
      width 200px
      float left
      cursor pointer
      .li-img
        height 100%
        width 100%
        img
          height 100%
          width 100%
          background-size 100%
      .title
        padding-top 10px
</style>
