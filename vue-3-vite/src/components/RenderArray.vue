<script setup lang="ts">
import { ref } from 'vue';

const defaultCountry = ref('');

const people = ref([
  {
    name: 'John',
    age: 23,
    country: 'USA',
  },
  {
    name: 'Jane',
    age: 25,
    country: 'Canada',
  }
]);

const setCountry = (country: string) => {
  defaultCountry.value = country;
}


</script>

<template>
  <h1>Render array</h1>

  <div>
    <button @click="setCountry('USA')">USA</button>
    <button @click="setCountry('Canada')">Canada</button>
  </div>

  <div v-if="defaultCountry === 'USA'">USA</div>
  <div v-else-if="defaultCountry === 'Canada'">Canada</div>

  <div v-for="p in people">
    <p>{{ p.name }} is {{ p.age }} years old</p>
  </div>
</template>
