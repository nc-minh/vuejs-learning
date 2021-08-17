<template>
  <div class="row mt-3">
      <form>
          <div class="col-sm-8 col-md-6 form-group">
              <label for="">U can saying...</label>
              <input class="form-group" placeholder="nhập vào đây" v-model="item"/>
          </div>
          <div class="col-sm-8 col-md-6 form-group">
              <button class="btn btn-success" @click.prevent="createNew">thêm</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            item: ''
        }
    },
    methods:{
        createNew(){
            if(this.item == ''){
                alert('không nhập mà đòi thêm à?')
            }else{
                this.$emit('itemAdd', this.item )
                this.item = ''
            }
        }
    }
}
</script>

<style>

</style>