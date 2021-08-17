<template>
  <div class="row">
      <Items
      v-for="(item, index) in items"
      :key="index"
      @click.native="removeItem(index)"
      >
      {{ item }}
      </Items>
  </div>
</template>

<script>
import Items from './Items.vue'
export default {
    data(){
        return{

        }
    },
    props:[
        'items'
    ],
    methods:{
        removeItem(index){
            console.log('hàm xoá đã chạy')
            this.$emit('itemRemoved',index)
        }
    },
    components:{
        Items
    }
}
</script>

<style>

</style>