<template>
  <div class="test">
      <div class="father">
          <button @click="batdennhado">bật đèn nhà đỏ</button>
          <hr>
          <h1>{{ xanhtat }}</h1>
          <hr>
          <h1>{{ dotat }}</h1>
      </div>
      <ChildElement 
      :thuoctinh_dotat="dotat" 
      :thuoctinh_xanhtat="xanhtat" 
      @hamxulixukien_batdenxanh="tenxukien_batdenxanh"
      />
  </div>
</template>

<script>
import ChildElement from './ChildElement.vue'
export default {
    data(){
        return{
            dotat: 'nhà đỏ đèn đang tắt',
            xanhtat: 'nhà xanh đèn đang tắt',
            dobat: 'nhà đỏ đèn đang bật',
            xanhbat: 'nhà xanh đèn đang bật'
        }
    },
    methods:{
        batdennhado(){
            this.dotat = this.dobat
        },
        tenxukien_batdenxanh(){
            console.log('hàm đã chạy ở cha')
            this.xanhtat = this.xanhbat
        }
    },
    components:{
        ChildElement
    }
}
</script>

<style>
.test{
    display: flex;
}
.father{
    width: 300px;
    height: 300px;
    background-color: blue;
}
</style>