<template>
    <div>
      <h1>Đăng ký tài khoản</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="studentName">Tên sinh viên:</label>
          <input v-model="user.studentName" type="text" id="studentName" ref="studentNameRef" required />
          <span v-if="errors.studentName">{{ errors.studentName }}</span>
        </div>
        
        <div>
          <label for="email">Email:</label>
          <input v-model="user.email" type="email" id="email" required />
          <span v-if="errors.email">{{ errors.email }}</span>
        </div>
        
        <div>
          <label for="password">Mật khẩu:</label>
          <input v-model="user.password" type="password" id="password" required />
          <span v-if="errors.password">{{ errors.password }}</span>
        </div>
        
        <div>
          <label for="address">Địa chỉ:</label>
          <input v-model="user.address" type="text" id="address" />
        </div>
        
        <button type="submit">Đăng ký</button>
        <p v-if="successMessage">{{ successMessage }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  const user = reactive({
    studentName: '',
    email: '',
    password: '',
    address: ''
  });
  
  const errors = reactive({
    studentName: '',
    email: '',
    password: ''
  });
  
  const successMessage = ref('');
  
  const studentNameRef = ref(null);
  
  const existingEmails = ref(['example@gmail.com', 'test@gmail.com']);
  
  const handleSubmit = () => {
    errors.studentName = '';
    errors.email = '';
    errors.password = '';
    successMessage.value = '';
  
    if (!user.studentName) {
      errors.studentName = 'Tên sinh viên không được để trống';
    }
  
    if (!user.email) {
      errors.email = 'Email không được để trống';
    } else if (existingEmails.value.includes(user.email)) {
      errors.email = 'Email đã tồn tại';
    }
  
    if (!user.password) {
      errors.password = 'Mật khẩu không được để trống';
    }
  
    if (!errors.studentName && !errors.email && !errors.password) {
      localStorage.setItem('registeredUser', JSON.stringify(user));
      resetForm();
      successMessage.value = 'Đăng ký tài khoản thành công';
      studentNameRef.value.focus();
    }
  };
  
  const resetForm = () => {
    user.studentName = '';
    user.email = '';
    user.password = '';
    user.address = '';
  };
  </script>
  

<style>

</style>