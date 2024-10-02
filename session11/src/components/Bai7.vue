<template>
  <div>

    <h1>Bài 7</h1>
    <input v-model="inputValue" placeholder="Nhập dữ liệu..." />
  </div>

</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';

const inputValue = ref('');

const updateTabTitle = () => {
  document.title = inputValue.value || 'Rikkei Education';
};

onMounted(() => {
  document.title = 'Rikkei Education';
});

onUpdated(() => {
  updateTabTitle();
});
</script>

<style>

</style>