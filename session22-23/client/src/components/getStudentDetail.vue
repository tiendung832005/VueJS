<template>
  
</template>

<script setup>
import axios from "axios";
import {ref} from "vue"
const students = ref([])
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

const getStudentById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/students/${id}`);
      console.log("Data: ", response.data);
    } catch (error) {
      console.log("Không tìm thấy bản ghi");
      
    }
  };
</script>

<style>

</style>