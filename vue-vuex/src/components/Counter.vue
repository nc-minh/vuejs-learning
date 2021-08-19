<template>
  <div class="container">
      <h1>đây là đếm</h1>
      <button class="btn btn-success" @click="incrementOption">Increment</button>
      <button class="btn btn-success" @click="asyncDecrement">Decrement</button>
      <hr>
      <input type="text" 
        v-model="value"
      >
      <!-- cách 1 -->
      <!-- :value="value" @input="updateValue" -->
      <p>Text: {{ value }}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
    methods:{
        increment(){
            this.$store.commit('incrementOption')
        },
        ...mapMutations([
            'decrementOption'
        ]),
        ...mapActions([
            'incrementOption',
            'asyncDecrement'
        ]),
        //cách 1
        // updateValue(event){
        //     this.$store.dispatch('updateValue', event.target.value)
        // }
    },
    computed:{
        value:{
            // cách 1
            // return this.$store.getters.value
            //cách 2
            set(value){
                this.$store.dispatch('updateValue', value)
            },
            get(){
                return this.$store.getters.value
            }
        }
    }
}
</script>

<style>

</style>