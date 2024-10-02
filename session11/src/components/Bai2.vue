<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="hanleClick">Counter</button>
    </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue';

const count = ref(0)
const hanleClick = ()=>{
    count.value++;
}
onUpdated(()=>{
    console.log("Dữ liệu đã thay đổi");
    
})
</script>

<style>

</style>