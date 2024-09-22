<template>
    <div>
        <h1>Bài4</h1>
        <h3 v-show="isVisiable">Thông báo: Welcome to Rikkei</h3>
        <button @click="btn">Hiển thị</button>
        <button @click="btn1">Ẩn</button>

    </div>
</template>
<script setup>
import { ref } from 'vue';
    const isVisiable = ref(false);
    const btn = ()=>{
        isVisiable.value=true;
    }
    const btn1 = ()=>{
        isVisiable.value=false;
    }
</script>
<style lang="">
    
</style>