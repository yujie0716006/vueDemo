<template>
  <div>
    qqqqqqqqqqqqqqqq
    <el-button @click="handleClick">按钮</el-button>
  <p>
    <el-button @click="handleGetData">handleGetData</el-button>
  </p>
    <p>
      <el-button @click="promiseAll">promiseAll</el-button>
      <el-button @click="getpromiseAll">getpromiseAll</el-button>
    </p>
    <p>
      <el-button @click="meadWhile">并行执行</el-button>
    </p>
  </div>
</template>

<script>
  import {promiseOne,promiseTwo} from "../../api/getDatas";

  export default {
    name: "index",
    data() {
      return {}
    },
    mounted(){

    },
    methods:{
      handleClick(){
        console.log('点击执行函数');
        this._initPromise().then((result) => {
          console.log('成功',result);
        }).catch((error) => {
          console.log('失败',error);
        });
      },
      _initPromise(){
        return new Promise((resolve,reject)=>{
          let timeOut = Math.random() * 2;
          console.log(`set timeout ${timeOut}`);
          setTimeout(() => {
            if(timeOut <1){
              console.log('call resolve');
              resolve('resolce,reject中共的值将作为成功或是失败之后调用then,catch中得到的参数');
            }else{
              console.log('call reject');
              reject(`timeout in 失败之后执行的 ${timeOut}`)
            }
          },1000)
        })
      },
      handleGetData(){
        promiseOne().then(res => {
          const result = res.data;
          if(result.ret){
            console.log('成功获取第一个接口数据',result.data);
          }
        });
        console.log('调用第一个接口完毕');
        setTimeout(() => {
          promiseTwo().then(res => {
            const result = res.data;
            if(result.ret){
              console.log('成功获取第二个接口数据',result.data);
            }
          })
        },3000)
        console.log('调用第二个接口完毕');
      },
      promiseAll(){
        /*const dataOne = new Promise((resolve,reject) => {
          resolve(
            promiseOne().then(res => {
              const result = res.data;
              if(result.ret){
                console.log('成功获取第一个数据',result.data);
                return result.data;
              }
            })
          )
        }).then(result => {
          console.log('result',result);
        });*/
        return new Promise((resolve,reject) => {
          resolve(
            promiseOne().then(res => {
              const result = res.data;
              if(result.ret){
                console.log('成功获取第一个数据',result.data);
                return result.data;
              }
            })
          )
          // promiseOne().then(res => {
          //   const result = res.data;
          //   if(result.ret){
          //     console.log('成功获取第一个数据',result.data);
          //     resolve();

          //   }
          // })
        })

      },
      getpromiseAll(){
        this.promiseAll().then(result => {
          console.log('调用完上面的接口所做的逻辑');
          console.log('getpromiseAll-result',result);
        })
      },
      meadWhile(){
        let one = new Promise((resolve,reject) => {
          setTimeout(resolve, 500, promiseOne().then(res => {
            const result = res.data;
            if(result.ret){
              console.log('成功获取第一个数据',result.data);
              return result.data;
            }
          }));
        });
        let two = new Promise((resolve,reject) => {
          setTimeout(() => {
            resolve(
              promiseOne().then(res => {
                const result = res.data;
                if(result.ret){
                  console.log('成功获取第一个数据',result.data);
                  return result.data;
                }
              })
            )
          },3000)
        });
        Promise.all([one,two]).then(result => {
          console.log('meanWhile',result);
        })
       /* one.then(result => {
          console.log('meanWhile',result);
        })
        two.then(result => {
          console.log('meanWhile',result);
        })*/
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
