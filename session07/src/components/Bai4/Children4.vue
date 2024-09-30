<template>
    <div>
        <h1>TodoItem Component</h1>
        <button @click="deleteItem">Delete</button>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['delete'])
const deleteItem = () => {
    const id = 1; // Giả sử ID là 1
    emit('delete', id); // Phát sự kiện và truyền id lên component cha
};

</script>

<style></style>