<template>
    <div>
        <h1>Children Component</h1>
        <p>Giá trị age từ component cha: {{ age }}</p>
    </div>
</template>

<script setup>
import { onUpdated } from 'vue';
import { defineProps } from 'vue';
    const props = defineProps({
  age: {
    type: Number,
    required: true
  }
});
onUpdated(() => {
  console.log('Giá trị của biến age đã thay đổi');
});
</script>

<style>

</style>