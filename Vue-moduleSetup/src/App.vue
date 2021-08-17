<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-outline-danger" @click="selectedComponents = 'Card'">Card</button>
          <button class="btn btn-outline-danger" @click="selectedComponents = 'About'">About</button>
          <button class="btn btn-outline-danger" @click="selectedComponents = 'Contact'">Contact</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div>{{ selectedComponents }}</div>
          <Card
          :cardTitle="title"
          >
            <p slot="title">{{ title_fromFather }}</p>
            <p slot="content">{{ content_fromFather }}</p>
            <p>cái này sẽ rơi vào default slot</p>
          </Card>
          <keep-alive>
            <component :is="selectedComponents"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
export default {
  name: 'app',
  data () {
    return {
      title: 'this my card',
      title_fromFather: 'this is content from father',
      content_fromFather: 'content from father',
      selectedComponents: 'Card'
    }
  },
  components:{
    Card,
    Contact,
    About,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
