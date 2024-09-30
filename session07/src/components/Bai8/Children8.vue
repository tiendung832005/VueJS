<template>
  <div v-if="isVisible" class="form-add-user">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div>
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="address" required />
      </div>

      <button type="submit">Submit</button>
      <button type="button" @click="closeForm">Close</button>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const name = ref('');
const email = ref('');
const address = ref('');

const handleSubmit = () => {
  console.log(`Name: ${name.value}, Email: ${email.value}, Address: ${address.value}`);
  closeForm();
};

const closeForm = () => {
  emit('close');
};
</script>

<style scoped>
.form-add-user {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: 20px 0;
}

form div {
  margin-bottom: 10px;
}

button {
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #28a745;
  color: white;
}

button[type="button"] {
  background-color: #dc3545;
  color: white;
}
</style>