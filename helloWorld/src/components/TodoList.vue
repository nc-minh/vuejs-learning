<template>
  <div class="task">
      <span>{{taskData.content}}</span>
  </div>
</template>

<script>
export default {
    props: ['taskData'],
    data(){
        return{

        }
    },
    methods:{
        deleteTask: function(){
            console.log(this.taskData)
        }
    }
}
</script>

<style>

</style>