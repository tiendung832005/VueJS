<template>
    <div >
        <h1>Bài 3</h1>
        <p>Age: {{ age }}</p>
        <p>Company: {{ company }}</p>
        <button @click="handleClick">Random</button>
    </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue';

const age = ref(1)
const handleClick = ()=>{
    age.value = Math.floor(Math.random() * 10) + 1;
}
const companies = ["Rikkei Academy", "Rikkei Education","Rikkei Fukuoka"]
const company = ref(companies[0])

onUpdated(()=>{
    company.value = companies[(age.value -1) % companies.length]
})

</script>

<style>

</style>