<template>
  <div>
    <ul>
      <li v-for="student in students" :key="student.id">
        {{ student.name }} - {{ student.email }}
        <button @click="removeById(student.id)">Xóa</button>
        <button @click="createStudent">Thêm</button>
        <button @click="updateStudentById(student.id)">Cập nhật</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Danh sách sinh viên (giả sử đã được lấy từ API)
const students = ref([
  { id: 1, name: 'Huy', email: 'huy123@gmail.com' },
  { id: 2, name: 'Lan', email: 'lan456@gmail.com' }
]);

const getAllStudent = async () => {
  try {
    const response = await axios.get("http://localhost:8080/students");
    students.value = response.data;
    console.log(students.value);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getAllStudent();
});

const removeById = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/students/${id}`);
    console.log('Xóa thành công:', response.data);

    students.value = students.value.filter(student => student.id !== id);
  } catch (error) {
    console.error('Có lỗi xảy ra:', error);
  }
};

// Hàm thêm mới sinh viên
const createStudent = async () => {
  try {
    const response = await axios.post("http://localhost:8080/students", {
      name: "Nga",
      email: "nga1011@gmail.com",
      address: "Hải Phòng",
      phone: "09223453218",
      status: false,
      create_at: "10/10/2024"
    });

    console.log("Response: ", response);
  
    getAllStudent();
  } catch (error) {
    console.error(error);
  }
};

// Hàm cập nhật sinh viên theo ID
const updateStudentById = async (id) => {
  const student = {
    name: "Tên mới", 
    email: "emailmoi@gmail.com", 
    address: "Địa chỉ mới",  
    phone: "0123456789",  
    status: true,
    updated_at: "10/10/2024"
  };

  try {
    const response = await axios.put(`http://localhost:8080/students/${id}`, student);
    console.log("Cập nhật thành công:", response.data);
    
    getAllStudent();
  } catch (error) {
    console.error("Cập nhật thất bại:", error);
  }
};
</script>

<style>
</style>
