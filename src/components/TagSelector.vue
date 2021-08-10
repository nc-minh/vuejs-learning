<template>
  <div class="list">
      <div 
      class="item_wrap" 
      v-for="(language, index) in languages" 
      :key="index" 
      @click="language.selected=!language.selected"
      :class="{selected: language.selected}">
          <span class="item">{{language.name}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            languages:[
                { name: 'PHP', selected: false },
                { name: 'Java', selected: true },
                { name: 'JavaScipt', selected: true },
                { name: 'Python', selected: false },
                { name: 'Dark', selected: false },
                { name: 'C++', selected: true },
            ]
        }
    }
}
</script>

<style>
    .list{
        display: flex;
        margin: 30px 0;
        flex-wrap: wrap;
    }

    .item_wrap{
        padding: 20px 30px;
        margin: 10px 10px;
        border-radius: 9999px;
        box-shadow: 3px 5px 10px #888888;
        cursor: pointer;
        border: 3px solid tomato;
    }

    .selected{
        background-color: teal;
    }
</style>