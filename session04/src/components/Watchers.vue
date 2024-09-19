<template>
    <div>
        <button @click="handleCount">Count</button>
    </div>
</template>
<script setup>
import {ref, watch} from "vue"
   const count = ref(0);

   const handleCount = ()=>{
    count.value++;
   }
   watch(count, (newValue, oldValue)=>{
        console.log(`Old value: ${oldValue}, new value: ${newValue}`);
        
   })
</script>
<style>
    
</style>