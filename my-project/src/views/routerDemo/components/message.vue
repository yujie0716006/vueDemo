<template>
  <div>
    <div>
      我是message文件中的内容
      <div v-for="(item,index) in messageList">
        <router-link :to="`/routerDemo/about/messageshow/messageDetail/${item.id}`" :key="index">{{item.name}}</router-link>
      </div>
      <el-button @click="handleLink">连接到home中</el-button>
      <!--
      这是遍历循环li标签
      ``就是简单的拼串，如果需要字符串，还得再外面添加双引号
      <li v-for="(item,index) in messageList" :key="index">{{item.name}}</li>
      这是遍历循环Ul标签，每个ul标签中有li
      <ul v-for="(item,index) in messageList">
        <li :key="index">{{item.name}}</li>
      </ul>-->
    </div>
    <div>
      详细信息显示在下面
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        messageList:[
          {name:'message1',id:1},
          {name:'message2',id:2},
          {name:'message3',id:3},
          {name:'message4',id:4},
        ]
      }
    },
    methods:{
      handleLink(){
        this.$router.push({path:'/routerDemo/home',query:{address:'焦作'}})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
