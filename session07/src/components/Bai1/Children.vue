<template>
    <div>
      <h1>ChildrenComponent</h1>
      <!-- B3: Lấy giá trị từ props và render dữ liệu  -->
      <h3>Children company: {{ userName }}</h3>
      
    </div>
  </template>
  
  <script setup>
  // B1: Định nghĩa props bên trong component con
  const {userName,} = defineProps(["userName",]);

  
  </script>
  
  <style>
  
  </style>