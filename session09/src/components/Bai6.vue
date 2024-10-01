<template>
  <div>
    <h1>Bài 6</h1>
    <div>Sở thích: {{ hobies }}</div>
        <div>
            <input value="Đá bóng" v-model="hobies" type="checkbox" id=""> Đá bóng
            <input value="Bóng chuyền" v-model="hobies" type="checkbox" id=""> Bóng chuyền
            <input value="Bơi lội" v-model="hobies" type="checkbox" id=""> Bơi lội
            <input value="Code" v-model="hobies" type="checkbox" id=""> Code
        </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const hobies = ref([])
</script>

<style>

</style>