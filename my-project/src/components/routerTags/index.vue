<template>
  <div class="tags-wrap" ref="tagsWrap">
    <div class="tags-div" ref="tagsWidth" :style="{width:`${isScrollWidth}px`}">
      <router-link v-if="tagsArray.length" v-for="(tag,index) in tagsArray" :to="tag.tagPath" :key="index" :id="`id${index}`" :ref="tag.tagPath">
        <el-tag
          :key="tag.tagName"
          closable
          :disable-transitions="true"
          @close.prevent.stop="handleClose(tag)"
          size="middle"
          :color="tag.tagPath==$route.path ? '#B2D8FF' : '#fff'">
          {{tag.tagName}}
        </el-tag>
      </router-link>
    </div>
    <div class="clear-wrap">
      <el-dropdown @command="handleCommand">
        <el-button type="primary" size="small">
          标签选项<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="closeAll">关闭所有</el-dropdown-item>
          <el-dropdown-item command="closeOthers">关闭其他</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: "router-tags",
    mounted(){
      this.initTagsDivWidth= this.$refs.tagsWrap.offsetWidth;
      this.initScrollDivWidth= this.$refs.tagsWidth.offsetWidth;
      window.onresize = () => {
        this.initTagsDivWidth= this.$refs.tagsWrap.offsetWidth;
      };
      this.getScrollWidth();

      this.$nextTick(()=> {
        const getPath= this.$refs[this.$route.path];
          this._initBScroll();
          console.log('sssss',this.$refs[this.$route.path]);
          if(getPath){
            this.initScroll.scrollToElement(getPath[0].$attrs.id);
          }
      });
    },
    watch:{
      $route(to){
        // to 为下一个去的地址，from 为上一个来的地址
        const tagObj={
          tagPath:to.path,
          tagName:to.name,
          isClear:true,
        };
        this.onlyTagsRouter(tagObj);
      },
      tagsArray(val){
        this.scrollTagsDivWidth= 110 * val.length;
      }
    },
    data() {
      return {
        initTagsDivWidth:'',
        scrollTagsDivWidth:'',
        initScrollDivWidth:'',
        initScroll:null,
      }
    },
    computed:{
      tagsArray(){
        return this.$store.state.routerTags.tagsArray;
      },
      isScrollWidth(){
        return this.scrollTagsDivWidth > this.initScrollDivWidth ? this.scrollTagsDivWidth : this.initScrollDivWidth
      },
    },
    methods:{
      // 增加无重复的tagRouter
      onlyTagsRouter(tagObj){
        const onlyFlag= this.tagsArray.some(item => {
          return item.tagPath == tagObj.tagPath
        });
        if(!onlyFlag){
          this.$store.dispatch('addTagsRouter',tagObj);
          sessionStorage.setItem('tagsRouter',JSON.stringify(this.tagsArray));
        }
      },
      // 关闭单个的路由导航
      handleClose(tag) {
        if(tag.tagName == '首页'){
          this.$message.error('首页不可移除！');
          return
        }
        const tagArray=[tag];
        this.$store.dispatch('delAllTagsRouter',tagArray);
        this.$router.push('/dashboard');
        sessionStorage.setItem('tagsRouter',JSON.stringify(this.tagsArray));
      },
    //  关闭路由导航
      handleCommand(command){
        if(command == 'closeAll'){
          const clearTagsArray= this.tagsArray.filter(item => {
            return item.isClear;
          });
          this.$store.dispatch('delAllTagsRouter',clearTagsArray);
          sessionStorage.setItem('tagsRouter',JSON.stringify(this.tagsArray));
          this.$router.push('/dashboard');
        }else if(command == 'closeOthers'){
          const clearTagsArray= this.tagsArray.filter(item => {
            return item.isClear && item.tagPath !== this.$route.path;
          });
          this.$store.dispatch('delAllTagsRouter',clearTagsArray);
          sessionStorage.setItem('tagsRouter',JSON.stringify(this.tagsArray));
        };
      },

    //  初始化滚动条
      _initBScroll(){
        this.initScroll= new BScroll(this.$refs.tagsWrap,{
          scrollX:true,
          click:true,
          mouseWheel:true,
          probeType:3,
        });
      },

    //  获取可滚动的DIV的宽度
      getScrollWidth(){
        const sessionMsg=sessionStorage.getItem('tagsRouter');
        if(sessionMsg){
          const length=JSON.parse(sessionMsg).length;
          this.scrollTagsDivWidth=110 * length;
        }
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.tags-wrap
  position relative
  height 100%
  width 100%
  .tags-div
    height 100%
    width 100%
    padding-right 100px
    .el-tag
      cursor pointer
      margin-right 8px
      color #000
  .clear-wrap
    position absolute
    top 0
    right 0
    height 100%
    width 100px
</style>
