<template>
    <div>
        <h1>Bài 7</h1>
        <button v-for=" index in 3 " 
        :key="index"
        :class="{active: activeIndex===index+1}"
        @click="updateIndex(index+1)"
        >Button {{ index + 1 }}</button>
        
    </div>
</template>
<script setup>
import { ref } from 'vue';
    const activeIndex = ref(1);
    const updateIndex = (index) =>{
        activeIndex.value = index;
    }

</script>
<style scoped>
    .active{
        background: red;
        color: #fff;
    }
</style>