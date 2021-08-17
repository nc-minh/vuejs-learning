<template>
  <div>
      <img src="https://tructiepxoso.vn/trang-loi-404.png" alt="">
      <button 
        @click="backHome"
        class="btn btn-primary">Back Home</button>
  </div>
</template>

<script>
export default {
    methods:{
        backHome(){
            this.$router.push({ name: 'home' })
        }
    }
}
</script>

<style>

</style>