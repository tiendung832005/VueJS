<template>
  <div>
    <h1>Bài 9</h1>
    <p>Counter: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const count = ref(0);

let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    count.value += 1;
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>


<style>

</style>