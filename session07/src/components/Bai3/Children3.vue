<template>
    <div>
      <h1>Children Component</h1>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { defineEmits } from 'vue';
  
  const emit = defineEmits(['increment']);
  
  const increment = () => {
    emit('increment'); // Phát sự kiện 'increment' lên component cha
  }
  </script>

<style>

</style>