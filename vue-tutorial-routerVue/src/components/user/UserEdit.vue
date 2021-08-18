<template>
  <div>
    <h1>user edit</h1>
    <p>User info Client:</p>
    <ul>
      <li>Locate: {{ $route.query.locate }}</li>
      <li>Browser: {{ $route.query.browser }}</li>
    </ul>
    <button class="btn btn-warning" @click="status = true">save</button>
    <h1 id="react">React</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      status: false
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
#react{
  height: 1000px;
}
</style>