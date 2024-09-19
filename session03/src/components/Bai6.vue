<template>
    <div>
        <h1>Bài 6</h1>
        <button @click="handleClick">Get param</button>
    </div>
</template>
<script setup>
const param = "Rikkei Academy"
    const handleClick = ()=>{
        console.log("Giá trị truyền vào là: ", param);
        
    } 
</script>
<style lang="">
    
</style>