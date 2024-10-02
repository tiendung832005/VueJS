<template>
  <div>
    <div v-if="isShow">
        <ChildrenComponent></ChildrenComponent>
    </div>
    <h1>Parent Component</h1>

    <button @click="handleShow">Togle</button>
  </div>
</template>

<script setup>
    import { ref } from "vue";
import ChildrenComponent from "./ChildrenComponent.vue"
    const isShow = ref(false)
    const handleShow = () => {
        isShow.value =!isShow.value
    }
</script>

<style>

</style>