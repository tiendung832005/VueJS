<template>
  <div>
    <h1>Bài 4</h1>
    <h1>TodoApp Component</h1>
    <p>Id to delete: {{ idToDelete  }}</p>
    <Children4 @delete="handleDelete"></Children4>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Children4 from './Children4.vue';

    const idToDelete = ref(null)

    const handleDelete = (id) => {
        idToDelete.value = id;
    };
</script>

<style>

</style>