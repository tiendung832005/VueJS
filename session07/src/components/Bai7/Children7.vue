<template>
  <div>
    <button @click="sendMessage">Send message</button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['message-sent']);

const sendMessage = () => {
  emit('message-sent');
};
</script>

<style>

</style>