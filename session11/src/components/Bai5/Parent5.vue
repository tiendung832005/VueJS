<template>
    <div>
        <h1>Parent Component</h1>
        <button @click="toggleChild">Toggle</button>
        <!-- Hiển thị component con khi isChildVisible là true -->
         <Children5 v-if="isChildVisible" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Children5 from './Children5.vue';

const isChildVisible = ref(true);

const toggleChild = () => {
  isChildVisible.value = !isChildVisible.value;
};
</script>

<style>

</style>