<template>
    <div>
        <h1>Bài 10</h1>
            <p >{{ array }}</p>
        <button @click="randomNumber">Random Number</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const array = ref([]);
const randomNumber = ()=>{
    const random = Math.floor(Math.random()*100) +1;
    array.value.push(random);
}
</script>
<style lang="">
    
</style>