<script setup lang="ts">
import { ref, watch } from 'vue';

const msg = ref('');

watch(msg, (newValue) => {
  if (newValue.length > 3) {
    msg.value = newValue.slice(0, 3);
  }
});
</script>

<template>
  <h1>VModel: {{ msg }}</h1>
  <input type="text" v-model="msg">
</template>
