<template>
   <div>
    <h1>Bài 8</h1>
    <button @click="showForm = true">Add user</button>
    <Children8 :isVisible="showForm" @close="closeForm" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Children8 from "./Children8.vue"
const showForm = ref(false);

const closeForm = () => {
  showForm.value = false;
};
</script>

<style>

</style>