<template>
  <div>
    <h1>Bài 3</h1>
    <input type="date" name="" id="" v-model="date">
    <p>Ngày sinh: {{ date }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

    const date = ref(0)
</script>

<style>

</style>