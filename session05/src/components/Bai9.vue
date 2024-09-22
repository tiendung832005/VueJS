<template>
    <div>
        <h1>Bài 9</h1>
        <p>Gender: {{ gen }}</p>
        <button @click="randomGen">Random gender</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
    const gen = ref("Nam");
    const array = ["Nam", "Nữ", "Khác"]
    const randomGen = () => {
        const random = Math.floor(Math.random() * array.length);
        gen.value = array[random]
    }
</script>
<style >
    
</style>