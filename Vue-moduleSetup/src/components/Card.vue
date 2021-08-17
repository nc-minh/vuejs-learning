<template>
  <div class="card">
      <slot name="title"></slot>
      <h2>{{ cardTitle }}</h2>
      <p>this is my card!</p>
      <slot name="content">slot default</slot>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props:{
        cardTitle: {
            type: String
        }
    }
}
</script>

<style>
.card{
    text-align: center;
    border: 3px solid #ccc;
    margin-top: 10px;
    box-shadow: 10px 10px 5px 5px #000;
}
</style>