<template>
    <div>
        <h1>Time: {{ time }}</h1>
    </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';

const time = ref(0)
let timerID;
// các phương thức trong giai đoạn mouting
onBeforeMount(()=>{
        count.value=5;
        console.log('Component ');
        
    })
    onMounted(()=>{
        timerID = setInterval(() => {
            time.value++
        }, 1000);
        console.log('Component Mounted');
    })
    // các phương thức trong giai đoạn update
    onBeforeUpdate(()=>{
        console.log('Component Before Update');
    })
    onUpdated(()=>{
        console.log('Component Updated');
    })

</script>

<style>

</style>