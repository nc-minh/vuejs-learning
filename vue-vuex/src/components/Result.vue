<template>
  <div class="container">
      <h1>đây là kết quả</h1>
      {{ result }}
  </div>
</template>

<script>
export default {
    computed:{
        result(){
            return this.$store.getters.tenSanPham
        }
    }
}
</script>

<style>

</style>