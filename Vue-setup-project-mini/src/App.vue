<template>
  <div id="app">
    <div class="container">
      <NewItem @itemAdd="itemAdd"></NewItem>
      <Header
      :itemCount="items.length"
      :maxItems="maxItems"
      ></Header>
      <ItemLayout
      :items="items"
      @itemRemoved="itemRemoved"
      ></ItemLayout>
      <div class="row mt-5">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">
            Info: this is info
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemLayout from './components/ItemLayout.vue'
import NewItem from './components/NewItem.vue'
import Header from './components/Header.vue'
export default {
  name: 'app',
  data () {
    return {
      items: [
      ],
      maxItems: 10
    }
  },
  methods:{
    itemAdd(item){
      if(this.items.length >= this.maxItems){
        return alert('đã nhập quá 10 phần tử!')
      }
      if(this.items.includes(item)){
        return alert('bị trùng nhé nhập lại nha^^')
      }else{
        this.items. push(item)
      }
    },
    itemRemoved(index){
      this.items.splice(index, 1);
      console.log('đã vào trong hàm xoá')
    }
  },
  components:{
    ItemLayout,
    NewItem,
    Header
  }
}
</script>

<style>

</style>
