<template>
  <div class="sticky-wrap" >
    <div class="message-show">
      <div>通过样式设定要固定的内容的样式</div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
    </div>
    <sticky className="stickyTopCss">
      <div class="slot-content">
        <el-dropdown trigger="click">
          <el-button plain>Platform<i class="el-icon-caret-bottom el-icon--right"></i></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-checkbox-group v-model="platformChecked">
              <el-checkbox v-for="item in platformGroup" :label="item.name" :key="item.name">{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click">
            <el-button>link<i class="el-icon-caret-bottom el-icon--right"></i></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-input placeholder="请输入链接" v-model="inputLink">
              <template slot="prepend">http://</template>
            </el-input>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="block">
          <el-date-picker
            v-model="time"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </div>
    </sticky>
    <div class="message-show">
      <div>通过样式设定要固定的内容的样式2222222222222222222222222222</div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>

      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
      <div>message </div>
    </div>
  </div>
</template>

<script>
  import sticky from '@/components/sticky/sticky';
  export default {
    name: "styick-demo",
    components:{sticky},
    watch:{},
    data() {
      return {
        platformGroup:[
          {name:'Platform-1',key:'Platform-1'},
          {name:'Platform-2',key:'Platform-2'},
          {name:'Platform-3',key:'Platform-3'},
        ],
        platformChecked:['Platform-1'],
        inputLink:'',
        time:'',
        pickerOptions:{
          disabledDate(time){   // 用来设置日期的禁用状态的
            return time.getTime() > new Date();
          },
          shortcuts:[   // 用来设置日期的快捷键的
            {text:'今天',onClick(picker){
              picker.$emit('pick',new Date());
              }},
            {text:'昨天',onClick(picker){
              const date= new Date();   // 创建时间
                date.setTime(date.getTime() - 3600*1000*24);
                  picker.$emit('pick',date);
              }},
            {
              text:'三天前',onClick(picker){
                const date= new Date();
                date.setTime(date.getTime() - 1000*3600*72);
                picker.$emit('pick',date);
              }
            },
            {
              text:'一周前',onClick(picker){
                const date= new Date();
                date.setTime(date.getTime() - 1000*3600*24*7);
                picker.$emit('pick',date);
              }
            }
          ]
        },
      }
    },
    methods:{

    }
  }
</script>
<style>
.el-dropdown-menu{
  padding-left:10px;
  padding-right:10px;
}
</style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.sticky-wrap
  position relative
  height 100%
  width 100%
  overflow-y scroll
  .stickyTopCss
    background-color green
    width 100%
    height 60px
    line-height 60px
    .slot-content
      float right
      padding-right 20px
      .block
        display inline-block


</style>
