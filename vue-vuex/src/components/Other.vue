<template>
  <div class="container">
      <h1>đây là kết quả</h1>
      <p>{{ tenSanPham }}</p>
      <p>this is name result: {{ nameResult }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'tenSanPham',
            'nameResult'
        ]),
        // hoặc
        // result(){
        //     return this.$store.getters.tenSanPham
        // },
        // nameResult(){
        //     return this.$store.getters.nameResult
        // },
    }
}
</script>

<style>

</style>