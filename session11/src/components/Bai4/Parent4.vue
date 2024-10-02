<template>
    <div>
        <h1>bài 4</h1>
        <p>Age: {{ age }}</p>
        <button @click="handleClick">Increase age</button>
        <Children4 :ageProps="age" />
    </div>
</template>

<script setup>
import Children4 from './Children4.vue';
import { ref } from 'vue';

    const age = ref(0)
    const handleClick = ()=>{
        age.value++;
    }
</script>

<style>

</style>