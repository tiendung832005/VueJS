<template>
   <div>
    <h2>Children Component</h2>
    <p>This is the child component content.</p>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onUnmounted } from 'vue';

onBeforeUnmount(() => {
  console.log('beforeUnmount: Component is about to be unmounted');
});

onUnmounted(() => {
  console.log('unmounted: Component has been unmounted');
});
</script>

<style>

</style>