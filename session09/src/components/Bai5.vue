<template>
  <div> 
    <h1>Bài 5</h1>
    <p>Giới tính: {{ gender }}</p>
            Nam <input v-model="gender" type="radio" value="Nam" name="nam" id="">
            Nữ <input v-model="gender" type="radio" value="Nữ" name="nu" id="">
            Khác <input v-model="gender" type="radio" value="Khác" name="" id="">
  </div>
</template>

<script setup>
import { ref } from 'vue';
    const gender = ref('Nam')
</script>

<style>

</style>