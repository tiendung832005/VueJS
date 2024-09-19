<template>
    <div>
        <h1>Bài 3</h1>
        <p>Acreage: {{ cal }}</p>
        <button @click="increaseWidth">Change Data</button>
    </div>
</template>
<script setup>
import {ref, computed} from "vue"
    const w = ref(10);
    const h = ref(20);
    const cal = computed(()=>w.value * h.value);
    const increaseWidth = ()=>{
        w.value += 10;  
    }
</script>
<style>
    
</style>