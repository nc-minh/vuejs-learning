<template>
  <div class="container">
      <div class="row justify-content-md-center">
          <div class="col-xs-12 col-sm-8 col-md-6">
              <p>{{ text | toLowerCase }}</p>
          </div>
      </div>

      <div class="row justify-content-md-center">
          <div class="col-xs-12 col-sm-8 col-md-6">
              <h2>Filter Products</h2>
              <input type="text" v-model="inputFilter" placeholder="nhập tên điện thoại">
              <div class="card">
                  <div class="card-body">
                      <ul>
                          <li v-for="product in filterProducts" :key="product"> {{ product }} </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { Products } from './MixinsJs'
export default {
    data(){
        return{
            text: 'text Hleoo'
        }
    },
    filters:{
        toLowerCase(text){
            return text.toLowerCase();
        }
    },
    mixins: [Products]
}
</script>

<style>

</style>