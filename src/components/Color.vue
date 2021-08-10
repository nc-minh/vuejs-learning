<template>
  <div>
      <input type="text" v-model="color">
      <div class="squares" :class="color"></div>
      <div class="squares" :style="customStyle"></div>
      <input type="text" placeholder="chiều dài" v-model="width">
      <input type="text" placeholder="chiều rộng" v-model="height">
      <div class="squares"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            color: 'red',
            check: false,
            width: 200,
            height: 200,
        }
    },

    computed:{
        customStyle: function(){
            return{
                backgroundColor: this.color,
                width: this.width + 'px',
                height: this.height + 'px'
            }
        }
    }
}
</script>

<style>
.squares{
    width: 100px;
    height: 100px;
    background-color: hotpink;
    border: solid 5px #ccc;
}

.red{
    background-color: red;
}

.blue{
    background-color: blue;
}

.green{
    background-color: green;
}

.default{
    background-color: indigo;
}
</style>