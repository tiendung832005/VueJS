<template>
    <div>
        <h1>Bài 4</h1>
        <input v-model="count" type="text">
    </div>
</template>
<script setup>
import {ref, watch} from "vue"
const count = ref("");

watch(count, (newValue, oldValue)=>{
        console.log(`Giá trị đổi từ: ${oldValue}, thành: ${newValue}`); 
   })
</script>
<style>
    
</style>