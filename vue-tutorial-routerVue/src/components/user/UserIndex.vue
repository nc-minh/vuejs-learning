<template>
  <div class="container">
    <h4>Chọn người dùng cần quản lí:</h4>
    <ul class="list-group" style="cursor: pointer">
      <router-link 
        tag="li" 
        class="list-group-item list-group-item-action"
        to="user/0"
      >User 0</router-link>
      <router-link 
        tag="li" 
        class="list-group-item list-group-item-action"
        to="user/1"
      >User 1</router-link>
      <router-link 
        tag="li" 
        class="list-group-item list-group-item-action"
        to="user/2"
      >User 2</router-link>
      <router-link 
        tag="li" 
        class="list-group-item list-group-item-action"
        to="user/3"
      >User 3</router-link>
      <router-link 
        tag="li" 
        class="list-group-item list-group-item-action"
        to="user/4"
      >User 4</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>