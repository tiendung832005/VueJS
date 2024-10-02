<template>
  <div>
    <h1>Bài 6</h1>
    <h1>Giá trị count: {{ count }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';

const count = ref(0);

const increment = () => {
  count.value += 1;
};

onMounted(() => {
  document.title = `Count: ${count.value}`;
});

onUpdated(() => {
  document.title = `Count: ${count.value}`;
});
</script>

<style>

</style>