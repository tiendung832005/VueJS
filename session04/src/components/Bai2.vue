<template >
    <div>
        <p>Id: {{ userInfo.company }}</p>
        <p>Tên: {{ userInfo.age }}</p>

        <button @click="handleClick">Change data</button>
    </div>
</template>
<script setup>
import {reactive} from "vue"
const userInfo = reactive( {
        age: 2,
        company: 'Rikkei Academy'
    });

const handleClick = ()=>{
    userInfo.age = 1;
    userInfo.company = 'Rikkei Education';
}

</script>
<style>
    
</style>