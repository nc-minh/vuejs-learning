<template>
  <div>
      <h1>User Details</h1>
      <button class="btn btn-success" @click="backUser">Back User Manager</button>
      <p>ID User: {{ id }} </p>
      <router-link :to="{ name: 'useredit', params: { id: this.id }, query:{ locate: 'vi', browser: 'chrome' } }" @click="edit" class="btn btn-primary">edit</router-link>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods:{
        edit(){
            // this.$router.push('/user/' + this.id + '/edit')
            //hoặc như trên router-link 
        },
        backUser(){
            this.$router.push('/user')
        }
  }
}
</script>

<style>

</style>