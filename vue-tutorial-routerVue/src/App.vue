<template>
  <div id="app">
    <div class="container">
      <router-view name="page-header"></router-view>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
