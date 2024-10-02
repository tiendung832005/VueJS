<template>
  <div>
    <h1>Bài 10</h1>
    <p>Thời gian hiện tại: {{ time }}</p>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted } from 'vue';

let timerID 

const formatDate = (date) =>{
    const today = new Date(date);

    const hours = today.getHours().toString().padStart(2, 0)

    const minutes = today.getMinutes().toString().padStart(2, 0)

    const seconds = today.getSeconds().toString().padStart(2, 0)

    return `${hours} ${minutes} ${seconds}`
}

const time = ref(formatDate(new Date()));

onMounted(()=>{
    timerID = setInterval(() => {
        time.value = formatDate(new Date());
    }, 1000);
})

onBeforeUnmount(()=>{
    clearInterval(timerID);
})
</script>

<style>

</style>