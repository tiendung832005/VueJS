<template>
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul v-if="products.length">
        <li v-for="product in products" :key="product.id">
          {{ product.name }}
          <button @click="getProductById(product.id)">Get detail</button>
          <button @click="removeProductById(product.id)">Delete</button>
          <button @click="prepareUpdateProduct(product)">Update</button>
        </li>
      </ul>
  
      <h2>Thêm mới sản phẩm</h2>
      <form @submit.prevent="createProduct">
        <div>
          <label for="name">Tên sản phẩm:</label>
          <input v-model="newProduct.name" type="text" id="name" required />
        </div>
        <div>
          <label for="price">Giá sản phẩm:</label>
          <input v-model="newProduct.price" type="number" id="price" required />
        </div>
        <div>
          <label for="description">Mô tả sản phẩm:</label>
          <input v-model="newProduct.description" type="text" id="description" required />
        </div>
        <button type="submit">Thêm sản phẩm</button>
      </form>
  
      <h2>Cập nhật sản phẩm</h2>
      <form @submit.prevent="updateProductById">
        <div>
          <label for="update-name">Tên sản phẩm:</label>
          <input v-model="updateProduct.name" type="text" id="update-name" required />
        </div>
        <div>
          <label for="update-price">Giá sản phẩm:</label>
          <input v-model="updateProduct.price" type="number" id="update-price" required />
        </div>
        <div>
          <label for="update-description">Mô tả sản phẩm:</label>
          <input v-model="updateProduct.description" type="text" id="update-description" required />
        </div>
        <button type="submit">Cập nhật sản phẩm</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const products = ref([]);
  const newProduct = ref({
    name: '',
    price: 0,
    description: ''
  });
  const updateProduct = ref({
    id: null, // Để lưu ID của sản phẩm cần cập nhật
    name: '',
    price: 0,
    description: ''
  });
  
  // Hàm lấy toàn bộ danh sách sản phẩm
  const getAllProduct = async () => {
    try {
      const response = await fetch('https://localhost:8080/products');
      const data = await response.json();
      products.value = data;
      console.log(data);
    } catch (error) {
      console.error('Có lỗi xảy ra khi lấy danh sách sản phẩm:', error);
    }
  };
  
  // Hàm lấy thông tin sản phẩm theo id
  const getProductById = async (id) => {
    try {
      const response = await fetch(`https://localhost:8080/products/${id}`);
      if (response.ok) {
        const product = await response.json();
        console.log('Chi tiết sản phẩm:', product);
      } else if (response.status === 404) {
        console.log('Không tìm thấy bản ghi');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Có lỗi xảy ra khi lấy chi tiết sản phẩm:', error);
    }
  };
  
  // Hàm xóa sản phẩm theo id
  const removeProductById = async (id) => {
    try {
      const response = await fetch(`https://localhost:8080/products/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        console.log(`Sản phẩm có id ${id} đã được xóa thành công`);
        products.value = products.value.filter(product => product.id !== id);
      } else if (response.status === 404) {
        console.log('Không tìm thấy bản ghi để xóa');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Có lỗi xảy ra khi xóa sản phẩm:', error);
    }
  };
  
  // Hàm tạo mới sản phẩm
  const createProduct = async () => {
    try {
      const response = await fetch('https://localhost:8080/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct.value)
      });
  
      if (response.ok) {
        const createdProduct = await response.json();
        console.log('Sản phẩm mới được thêm:', createdProduct);
        products.value.push(createdProduct); // Thêm sản phẩm vào danh sách
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Có lỗi xảy ra khi thêm sản phẩm:', error);
    }
  };
  
  // Hàm chuẩn bị dữ liệu để cập nhật sản phẩm
  const prepareUpdateProduct = (product) => {
    updateProduct.value = { ...product }; // Sao chép thông tin sản phẩm vào updateProduct
  };
  
  // Hàm cập nhật sản phẩm theo id
  const updateProductById = async () => {
    if (updateProduct.value.id === null) {
      console.error('ID của sản phẩm cần cập nhật không được để trống.');
      return;
    }
  
    try {
      const response = await fetch(`https://localhost:8080/products/${updateProduct.value.id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: updateProduct.value.name,
          price: updateProduct.value.price,
          description: updateProduct.value.description
        })
      });
  
      if (response.ok) {
        const updatedProduct = await response.json();
        console.log('Sản phẩm đã được cập nhật:', updatedProduct);
  
        // Cập nhật danh sách sản phẩm sau khi sản phẩm được cập nhật thành công
        const index = products.value.findIndex(p => p.id === updateProduct.value.id);
        if (index !== -1) {
          products.value[index] = updatedProduct;
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Có lỗi xảy ra khi cập nhật sản phẩm:', error);
    }
  };
  
  // Gọi hàm getAllProduct khi component được mount
  onMounted(() => {
    getAllProduct();
  });
  </script>
  
  <style scoped>
  </style>
  