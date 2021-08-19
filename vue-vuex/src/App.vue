<template>
  <div id="app">
    <h1>VueX</h1>
    <hr>
    <Counter/>
    <hr>
    <Result/>
    <hr>
    <Other/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Result from './components/Result.vue';
import Other from './components/Other.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    Counter,
    Result,
    Other
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
