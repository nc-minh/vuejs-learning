<template>
  <div>
      <div class="container text-center">
        <h1>Quản lí người dùng</h1>
        <p>Đây là khu vực quản lí người dùng trong website</p>
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">User done!</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <hr>
          <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
        <router-link class="btn btn-success" to="/">Back Home</router-link>
        <!-- <UserDetails/> -->
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import UserDetails from './UserDetails.vue'
export default {
    name: 'user',
    methods:{
      goToProfile(){
        this.$router.push('/profile/1')
      }
    },
    components:{
      UserDetails
    }
}
</script>

<style>

</style>