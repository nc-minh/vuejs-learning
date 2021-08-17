<template>
  <div>
    {{ title }}
    <p v-html="h1Tag"></p>
    <button v-on:click="tanggiatri">+1 nhé</button>
    <div>{{ dem }}</div>
    <div class="mousemove" v-on:mousemove="toado">Toạ độ của chuột {{ x }}/{{ y }}
      <button v-on:mousemove.stop="">chạm để dừng đo toạ độ</button>
    </div>
    <input v-on:keyup.enter="guitin" type="text" placeholder="gửi tin nhắn">
  </div>
</template>

<script>
export default {
    data(){
      return{
        title: 'đây là nội dung học về thuộc tính!',
        h1Tag: '<h1>đây là h1</h1>',
        dem: 0,
        x: 0,
        y: 0
      }
    },
    methods:{
      tanggiatri: function(){
        this.dem++
      },

      toado: function(event){
        this.x = event.clientX;
        this.y = event.clientY;
      },
      guitin: function(){
        alert('tin nhắn đã được gửi!')
      }
    }
}
</script>

<style>
.mousemove{
  width: 100%;
  height: 100px;
  background-color: royalblue;
}
</style>