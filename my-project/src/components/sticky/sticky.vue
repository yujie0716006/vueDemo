<template>
  <div :class="className" :style="{zIndex:zIndex,position:position,stickyTop:stickyTop+'px',width:width+'px'}" ref="stickyDis">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "sticky",
    props:{
      className:{
        type:String,
      },
      zIndex:{
        type:Number,
        default:1,
      },
      stickyTop:{
        type:Number,
        default:0
      },
    },
    mounted(){
      this.$refs.stickyDis.parentElement.addEventListener('scroll',this.handleScroll);
    },
    beforeDestroy(){
      this.$refs.stickyDis.parentElement.removeEventListener('scroll',this.handleScroll);
    },
    data() {
      return {
        stickyDis:'',
        position:'',
        width:'',
      }
    },
    methods:{
      handleScroll(){
        this.width= this.$refs.stickyDis.getBoundingClientRect().width;
        this.stickyDis= this.$refs.stickyDis.getBoundingClientRect().top;
        console.log('scrollTop',this.$refs.stickyDis.parentElement.scrollTop);
        if(this.stickyDis <= this.stickyTop+91){
          this.position= 'fixed';
          console.log('fiexed',this.stickyDis);
          this.$refs.stickyDis.style.top = '91px';
        }else{
          this.position='';
          this.$refs.stickyDis.style.top = this.$refs.stickyDis.getBoundingClientRect().top;
          console.log('zhengchang',this.stickyDis);
        }

      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
