<template>
    <div>
        <h1>Children Component</h1>
        <input type="text" name="" id="" v-model="inputValue">
        <h2>Count: {{ count }}</h2>
        <button @click="handleCount">Increase</button>
    </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
    const count = ref(0)
    const inputValue = ref('')

    const handleCount =  () => {
        count.value++
    }
    // các phương thức trong giai đoạn mouting
    onBeforeMount(()=>{
        count.value=5;
        console.log('Component ');
        
    })
    onMounted(()=>{
        count.value=6;
        console.log('Component Mounted');
    })
    // các phương thức trong giai đoạn update
    onBeforeUpdate(()=>{
        console.log('Component Before Update');
    })
    onUpdated(()=>{
        console.log('Component Updated');
    })
    // các phương thức giai đoạn unmount
    onBeforeUnmount(()=>{
        console.log('Component Before Unmount');
    })
</script>

<style>

</style>