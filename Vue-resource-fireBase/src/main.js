import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'https://vue-firsttime-firebase-default-rtdb.firebaseio.com/'

Vue.http.interceptors.push((Request, next) =>{
  console.log(Request)
  if(Request.method == 'POST'){
    Request.method = 'PUT'
  }
  next()
})

new Vue({
  el: '#app',
  render: h => h(App)
})
