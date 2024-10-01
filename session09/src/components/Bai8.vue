<template>
    <div>
      <h1>Đăng ký tài khoản mới</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Tên:</label>
          <input v-model="user.name" type="text" id="name" required />
        </div>
        
        <div>
          <label for="email">Email:</label>
          <input v-model="user.email" type="email" id="email" required />
        </div>
        
        <div>
          <label for="password">Mật khẩu:</label>
          <input v-model="user.password" type="password" id="password" required />
        </div>
        
        <div>
          <label for="confirmPassword">Nhập lại mật khẩu:</label>
          <input v-model="confirmPassword" type="password" id="confirmPassword" required />
        </div>
        
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  
  const user = reactive({
    name: '',
    email: '',
    password: ''
  });
  
  const confirmPassword = ref('');
  
  const handleSubmit = () => {
    if (user.password !== confirmPassword.value) {
      console.error('Mật khẩu và nhập lại mật khẩu không khớp!');
    } else {
      console.log(user);
    }
  };
  </script>
  

<style>

</style>