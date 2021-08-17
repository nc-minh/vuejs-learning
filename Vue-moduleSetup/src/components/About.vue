<template>
  <div>
      <h1>this is about page</h1>
      <button @click="counter++">bấm để tăng</button>
      <div>{{ counter }}</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0
        }
    }
}
</script>

<style>

</style>