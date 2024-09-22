<template>
    <div>
        <h1>Bài 1</h1>
        <h1 v-if="show">Rikkei Education</h1>
        <button @click="btn2">Hiện</button>
    </div>
</template>
<script setup>
import {ref} from "vue";
    const show = ref(true);
    const btn2 = () =>{
        show = false
    }
</script>
<style lang="">
    
</style>