<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1>Vue Resource</h1>
          <div class="form-group">
            <input type="text"
              placeholder="username"
              v-model="user.username"
            >
          </div>
          <div class="form-group">
            <input type="password"
              placeholder="password"
              v-model="user.password"
            >
          </div>

          <button class="btn btn-block btn-success"
            @click="post"
          >POST</button>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <h1>GET</h1>
          <button class="btn btn-block btn-success"
            @click="get"
          >GET</button>
          <h3>List user</h3>
          
          <div class="alert alert-danger"
            v-for="(item, index) in users"
            :key="index"
          >
          
          {{ item }}
          
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <h1>GET</h1>
          <button class="btn btn-block btn-success"
            @click="getResource"
          >getResource</button>
          <h3>List</h3>
          
          <input type="text" v-model="node">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      user:{
        username: '',
        password: ''
      },
      users: [],
      resource: {},
      node: 'data'
    }
  },
  methods:{
    post(){
      // not use resource
      // console.log(this.users)
      // // POST /someUrl
      // this.$http.post('', this.user).then(response => {

      //   console.log(response)

      //   // get status
      //   response.status;
      //   console.log(response.status)

      //   // get status text
      //   response.statusText;
      //   console.log(response.statusText)

      //   // get 'Expires' header
      //   response.headers.get('Expires');

      //   // get body data
      //   this.someData = response.body;
      //   console.log(this.someData)

      // }, response => {
      //   // error callback
      //   console.log(response)
      // });

      //use resource

      // this.resource.save({}, this.user)

      //user custom resource
      this.resource.createItem(this.user)
    },
    get(){
      // GET /someUrl?foo=bar
      this.$http.get('').then(response => {
        // success callback
        return response.json()
      })
      .then(data => {
        console.log(data)
        const newArr = []
        for(let  key in data){
          newArr.push(data[key])
        }
        this.users = newArr
        return console.log(newArr)
      })
    },
    getResource(){
      this.resource.getNodeData({node: this.node}).then(response => {
        // success callback
        return response.json()
      })
      .then(data => {
        console.log(data)
        const newArr = []
        for(let  key in data){
          newArr.push(data[key])
        }
        this.users = newArr
        return console.log(newArr)
      })
    }
  },
  created(){
    // tạo phương thức trong resource
    const customAction = {
      createItem: {
        method: 'POST',
        url: 'post.json'
      },
      getNodeData: {
        method: 'GET'
      }
    }
    this.resource = this.$resource('{node}.json', {}, customAction)
  }
}
</script>

<style>

</style>
