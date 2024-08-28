<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from "vue";
import { User } from "../types/user";

const users = ref([] as User[])

onMounted(() => {
  console.log('Component is mounted')

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      users.value = json
    })
})

watch(users, (newUsers) => {
  console.log('watch:Users updated', newUsers)
})

watchEffect(() => {
  console.log('watchEffect:Users updated', users.value)
})

</script>

<template>
  <h1>Onmounted</h1>
  {{ console.log("HTML render") }}

  <div v-for="u in users">
    <p>{{ u?.name }} - {{ u?.phone }}</p>
  </div>
</template>
