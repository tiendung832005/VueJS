<template>
    <div>
      <h1>Đăng nhập tài khoản</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" required />
          <span v-if="errors.email">{{ errors.email }}</span>
        </div>
  
        <div>
          <label for="password">Mật khẩu:</label>
          <input v-model="password" type="password" id="password" required />
          <span v-if="errors.password">{{ errors.password }}</span>
        </div>
  
        <button type="submit">Đăng nhập</button>
        <p v-if="loginMessage">{{ loginMessage }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  const errors = reactive({
    email: '',
    password: ''
  });
  
  const loginMessage = ref('');
  
  const handleLogin = () => {
    errors.email = '';
    errors.password = '';
    loginMessage.value = '';
  
    if (!email.value) {
      errors.email = 'Email không được để trống';
    }
  
    if (!password.value) {
      errors.password = 'Mật khẩu không được để trống';
    }
  
    if (!errors.email && !errors.password) {
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
  
      if (registeredUser && registeredUser.email === email.value && registeredUser.password === password.value) {
        loginMessage.value = 'Đăng nhập thành công';
      } else {
        loginMessage.value = 'Đăng nhập thất bại';
      }
    }
  };
  </script>
  

<style>

</style>