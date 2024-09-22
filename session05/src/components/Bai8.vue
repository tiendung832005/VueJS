<template >
    <div>
        <h1>Bài 8</h1>
        <ul>
            <li v-for="number in array" :key="number">{{ number }}</li>
        </ul>
        <button @click="increase">Tăng dần</button>
        <button @click="decrease">Giảm dần</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';

    const array = ref([1,2,3,5,7,9])
    const increase = ()=>{
        array.value.sort((a,b)=>a-b)
    }
    const decrease = ()=>{
        array.value.sort((a,b)=>b-a)
    }
</script>
<style lang="">
    
</style>