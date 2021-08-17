import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight',{
  bind(el, binding, vnode){
    delay = 0
    if(binding.modifiers['delayed']){
      var delay = 3000
    }
    setTimeout(()=>{
    
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value
      }else{
        el.style.color = binding.value
      }

    }, delay)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
