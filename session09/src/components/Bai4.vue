<template>
  <div>
    <h1>Bài 4</h1>
    <input type="range" name="" id="" v-model="range">
    <p>Tiến độ hoàn thành: {{ range }}%</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const range = ref('')
</script>

<style>

</style>