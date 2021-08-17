<template>
  <div class="col-sm-6 col-md-4 col-lg-3 mt-1 ">
      <div class="card">
          <div class="card-body item">
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
.card-body{
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    color: #6e6e6e;
}

.item{
    cursor: pointer;
}

.item:hover{
    background-color: #ffe2e2;
}
</style>