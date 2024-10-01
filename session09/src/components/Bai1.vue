<template>
  <div>
    <h1>Bài 1</h1>
    Email: <input type="text" v-model="email">
    <p>Giá trị: {{ email }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

    const email = ref("")
</script>

<style>

</style>