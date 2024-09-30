<template>
    <div>
        <h1>Bài 3</h1>
      <h1>Parent Component</h1>
      <p>Count: {{ count }}</p>
      <Children3 @increment="handleClick"></Children3>
    </div>
  </template>
  
  <script setup>
  import Children3 from './Children3.vue';
  import { ref } from 'vue';
  
  const count = ref(0)
  const handleClick = () => {
    count.value++;
  }
  </script>
<style>

</style>