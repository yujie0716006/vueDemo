<template>
  <div class="i18n-wrap">
    <div class="card-wrap">
      <div class="card-content">
        <h1 class="card-title">
          <i class="icon iconfont icon-shouye"></i>
          <span>{{ $t('i18n.changeLang') }}</span>
        </h1>
        <el-radio-group v-model="radioValue">
          <el-button>
            <el-radio label="zh-CN">简体中文</el-radio>
          </el-button>
          <el-button>
            <el-radio label="en">English</el-radio>
          </el-button>
        </el-radio-group>
        <div class="text">
          {{$t('i18n.cardText')}}
        </div>
        <div>
          <el-button>{{$t('i18n.buttonSuccess')}}</el-button>
          <el-button>{{$t('i18n.buttonFail')}}</el-button>
        </div>
      </div>
    </div>
    <div>
      <div v-for="(item,index) in lists" :key="index" >
        <el-input v-model="item.name"></el-input>{{item}}
        <el-button @click="handleDelete(item.id)">删除</el-button>
    </div>
      <el-button @click="handleAddInput">添加</el-button>
    </div>
    <div>
      <span>动态添加HTML</span>
      <el-button size="small" @click="handleHtml">添加HTML</el-button>
      <el-button size="small" @click="changeHtml">改变组件</el-button>
      <keep-alive>   <!--缓存当前页面中的内容-->
        <component :is="componentAdd" @listenInput="getChildrenData"></component>
      </keep-alive>
      {{`childrenValue:${childrenValue}`}}
    </div>
    <div>
      <el-button @click="handleAdd">添加一个address属性</el-button>
      <p v-for="(item,key) in obj" :key="key">{{`${key}---${item}`}}</p>
    </div>
  </div>
</template>
<script>
import inputClass from './inputClass';
import newIndex from './newIndex';
  export default {
    name: "i18n",
    mounted(){
      console.log('时间戳',new Date().getTime());
    },
    components:{inputClass,newIndex},
    data() {
      return {
        lists:[
          {
            id:1,
            name:'one'
          },
          {
            id:2,
            name:'two'
          },
        ],
        componentAdd:'',
        childrenValue:'',
        obj:{
          name:'小明',
          age:'12'
        }
      }
    },
    computed:{
      radioValue:{
        get(){
          return this.$store.state.language;
        },
        set(value){
          this.$store.dispatch('changeLanguage',value);
          this.$i18n.locale = value;
          localStorage.setItem('languageValue',value);
        }
      }
    },
    methods:{
      handleAddInput(){
        const inputObj = {
          id:new Date().getTime(),
          name:''
        };
        this.lists.push(inputObj);
      },
      handleDelete(deleteId){
        this.lists = this.lists.filter((item) => {
        return item.id !== deleteId
      });
      },
      // 动态添加HTML
      handleHtml(){
        this.componentAdd = 'input-class';
      },
      // 改变组件
      changeHtml(){
        this.componentAdd = 'new-index';
      },
      // 从子组件得到的值
      getChildrenData(data){
        this.childrenValue = data;
      },
      // 添加对象的一个属性
      handleAdd(){
        // this.obj.address = '焦作';
        this.$set(this.obj,'address','河南');
        console.log('obj',this.obj);
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.i18n-wrap
  width 100%
  height 100%
  padding 20px
  .card-wrap
    position relative
    width 100%
    height 200px
    .card-content
      position absolute
      height 100%
      width 500px
      left 0
      right 0
      bottom 0
      top 0
      margin auto
      text-align center
      .card-title
        text-align left
        padding-bottom 25px
      .el-radio-group,.text
        padding-bottom 10px
  div
    .el-input
      width 200px
  div
    .addInput
      width 200px
      height 40px
</style>
