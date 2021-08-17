<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-xs-12 col-sm-8 col-md-6">
          <h1>Default/Build-in Directives</h1>
          <p v-text="'something else...'"></p>
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="col-xs-12 col-sm-8 col-md-6">
          <h1>Custom Directives</h1>
          <p v-highlight:background.delayed="'red'">Color</p>
        </div>
      </div>
    </div>
    <FilterVue/><hr>
    <MixinsVue/><hr>
    <TransitionsVue/>
  </div>
</template>

<script>
import FilterVue from './components/FilterVue.vue'
import MixinsVue from './components/MixinsVue.vue'
import TransitionsVue from './components/TransitionsVue.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    FilterVue,
    MixinsVue,
    TransitionsVue
  }
}
</script>

<style>

</style>
