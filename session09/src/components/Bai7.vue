<template>
    <div>
      <h1>Thêm sản phẩm mới</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="productId">Mã sản phẩm:</label>
          <input v-model="product.productId" type="text" id="productId" required />
        </div>
        
        <div>
          <label for="productName">Tên sản phẩm:</label>
          <input v-model="product.productName" type="text" id="productName" required />
        </div>
        
        <div>
          <label for="price">Giá:</label>
          <input v-model="product.price" type="number" id="price" required />
        </div>
        
        <div>
          <label for="quantity">Số lượng:</label>
          <input v-model="product.quantity" type="number" id="quantity" required />
        </div>
        
        <button type="submit">Thêm mới</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const product = reactive({
    productId: '',
    productName: '',
    price: null,
    quantity: null
  });
  
  const handleSubmit = () => {
    console.log("1111",product);
  };
  </script>

<style>

</style>