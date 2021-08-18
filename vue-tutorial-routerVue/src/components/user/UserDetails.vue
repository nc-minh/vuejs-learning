<template>
  <div>
      <h1>User Details</h1>
      <router-link class="btn btn-success" to="/user">Back User Manager</router-link>
      <p>ID User: {{ id }} </p>
      <router-link :to="{ name: 'useredit', params: { id: this.id }, query:{ locate: 'vi', browser: 'chrome' }, hash: '#react' }" @click="edit" class="btn btn-primary">edit</router-link>
      <button class="btn btn-warning" @click="status = true">save</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            status: false
        }
    },
    methods:{
        edit(){
            // this.$router.push('/user/' + this.id + '/edit')
            //hoặc như trên router-link 
        }
    },
    beforeRouteEnter(to, from, next){
        if(true){
            next()
        }else{
            next(false)
        }
    },
    beforeRouteLeave(to, from, next){
    if(this.status){
      next()
    }else{
      if(confirm('Bạn chưa lưu! Sẽ bị mất hết dữ liệu!')){
        next()
      }else{
        next(false)
      }
    }
  }
}
</script>

<style>

</style>