<template>
  <div>
    <h1>Bài 7</h1>
    <Children7 @message-sent="displayAlert" />
    
  </div>
</template>

<script setup>  
import { ref } from "vue";
import Children7 from "./Children7.vue"
const messageVisible = ref(false);

const displayAlert = () => {
  alert('Welcome to Rikkei Education');
};
</script>

<style>

</style>