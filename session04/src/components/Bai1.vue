<template>
    <div>
        <h1>Bài 1</h1>
        <button @click="handleCount">Click {{ count }} lần</button>
    </div>
</template>
<script setup>
import { ref } from "vue";
    const count = ref(0)
    const handleCount = ()=>{
        count.value++;
    }
</script>
<style >
    
</style>