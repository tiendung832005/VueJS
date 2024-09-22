<template>
    <div>
        <h1>Bài 5</h1>
        <p v-for="number in check" :key="number">Các số chẵn từ mảng: {{ number }}</p>
    </div>
</template>
<script setup>
import {ref, computed} from "vue"
    const array = ref([1,2,3,4,5,6,7,8,9,10])
    const check = computed(()=>{
        return array.value.filter(number => number%2===0)
    })
</script>
<style>
    
</style>