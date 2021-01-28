<template>
  <div>
    <p>oldTable1:{{oldTable1}}</p>
    <p>newTable1:{{newTable1}}</p>
    <p>oldTable2:{{oldTable2}}</p>
    <p>newTable2:{{newTable2}}</p>
      <ul id="items">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    <ul id="items-2">
      <li>item-2 1</li>
      <li>item-2 2</li>
      <li>item-2 3</li>
    </ul>
  </div>
</template>

<script>
  import Sortable from "sortablejs";
  export default {
    name: "dragTable",
    components:{Sortable},
    mounted(){
      this._initTable();
    },
    data() {
      return {
        sortable:null,
        oldTable1:[1,2,3],
        newTable1:[1,2,3],
        oldTable2:[1,2,3],
        newTable2:[1,2,3],
      }
    },
    methods:{
      _initTable(){
        let el = document.getElementById('items');
        let el2 = document.getElementById('items-2');
        this.sortable = new Sortable(el,{
          group: "tableList",
          animation: 150,
          onEnd: (evt) =>{
            // splice是在原来的数据上进行的修改，将删掉的数据返回
            const targetLocate=this.newTable1.splice(evt.oldIndex,1)[0];
            this.newTable1.splice(evt.newIndex,0,targetLocate);
          }
        });
        this.sortable = new Sortable(el2,{
          group: "tableList",
          onEnd: (evt) =>{
            const targetLocate=this.newTable2.splice(evt.oldIndex,1)[0];
            this.newTable2.splice(evt.newIndex,0,targetLocate)
          }
        })
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#items,#items-2
  float left
  width 200px
  height 200px
  border 1px solid
  margin 60px 100px 100px 200px
  li
    padding 5px
    cursor move
</style>
