<template>
    <div>
        <h1>Bài 6</h1>
        <p v-for="number in check" :key="number">
            Các số lẻ lớn hơn 10 chia hết cho 3 từ mảng: {{ number }}</p>
    </div>
</template>
<script setup>
import {ref, computed} from "vue"
    const array = ref([5,12,15,22,9,18,25,30,7,33])
    const check = computed(()=>{
        return array.value.filter(number => number>10 && number%3===0)
    })
</script>
<style>
    
</style>