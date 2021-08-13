<template>
  <div id="app">
    <div @click="handleAlert">aaaaaaaaaaaaaa</div>
    <div v-show="isShow">thông báo đang được hiện</div>
    <button v-on:click="isShow = !isShow" >Nhấn vào đây để ẩn thông báo trên</button>
    <button @click="isC1 = true">hiện c1</button>
    <button @click="isC1 = isC2 = isC3 = false">ẩn tất cả</button>
    <button @click="isC1 = isC2 = isC3 = true">hiện tất cả</button>
    <div v-if="isC1 == true" class="c1">
      đây là c1
      <button @click="isC2 = true, isC1 = false">c2</button>
      <button @click="isC3 = true, isC1 = false">c3</button>
    </div>
    <div v-if="isC2 == true" class="c2">
      đây là c2
      <button @click="isC1 = true, isC2 = false">c1</button>
      <button @click="isC3 = true, isC2 = false">c3</button>
    </div>
    <div v-if="isC3 == true" class="c3">
      đây là c3
        <button @click="isC1 = true, isC3 = false">c1</button>
        <button @click="isC2 = true, isC3 = false">c2</button>
    </div>

    <input type="text" v-model="newTask">
    <button @click="addTask">Thêm</button>
    <div v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" v-model="task.done"> 
      <span :class="{done: task.done}">
        {{task.content}}
      </span>
    </div>

    <!-- task nhập từ con -->
    <!-- theo kiểu mảng propsname -->
    <hr>

    <TodoList v-for="(task, index) in tasks" :key="index" :taskData="task"/>


    <hr>
    <TagSelector/>
    <hr>
    <button @click="price += 500000">+500k</button>
    <div>{{price | formatMoney}}</div>
    <hr>
    <LearningAttr/>
    <hr>
    <Color/>
    <hr>
    <FatherElement/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TagSelector from './components/TagSelector.vue'
import LearningAttr from './components/LearningAttr.vue'
import Color from './components/Color.vue'
import FatherElement from './components/FatherElement.vue'
export default {
  name: 'App',

  data(){
    return{
      totalPrice: 0,
      price: 1000000,
      newTask: '',  
      msg: 'đây là menu',
      isShow: true,
      isC1: false,
      isC2: false,
      isC3: false,
      tasks: [
        { content: 'di cho', done: false },
        { content: 'nau an', done: false },
        { content: 'cho cho an', done: false },
        { content: 'cho meo an', done: false },
        { content: 'cho nguoi yeu an', done: false },
      ]
    }
  },

  components:{
    TodoList,
    TagSelector,
    LearningAttr,
    Color,
    FatherElement
  },

  methods:{
    handleAlert: function(){
      alert('aaaaaaa')
    },

    addTask: function(){
        this.tasks.push({content: this.newTask, done: false})
        this.newTask = ''
    },
  },

  filters:{
    formatMoney: function(price){
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price);
    }
  },

  watch:{
    newTask: function(neww, old){
      console.log(old)
      console.log(neww)
      console.log('đã có sự thay đổi!')
    }
  },

  mounted(){
    console.log('chay dau tien')
    //dùng để gọi api :))
  },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.c1{
  width: 100px;
  height: 100px;
  background-color: rosybrown;
}
.c2{
  width: 100px;
  height: 100px;
  background-color: saddlebrown;
}
.c3{
  width: 100px;
  height: 100px;
  background-color: slateblue;
}

.done{
  text-decoration: line-through;
}

</style>
