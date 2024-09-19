<template>
    <div class="main-content">
      <div class="cart-grid">
        <div v-for="(item, index) in 16" :key="index" class="cart-item">
          Cart
        </div>
      </div>
    </div>
  </template>
  
  <script>
  </script>
  
  <style scoped>
  .main-content {
    padding: 20px;
    background-color: #fff5f5;
    width: 960px;
  }
  
  .cart-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  
  .cart-item {
    width: 200px;
    height: 150px;
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
    text-align: center;
    color: black
  }
  </style>
  