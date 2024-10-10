<template>
    <div>
      <button class="btn btn-primary">Thêm mới sản phẩm</button>
  
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng (kg)</th>
            <th>Ngày thêm</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>
              <img :src="product.image" alt="Hình sản phẩm" class="product-image" />
            </td>
            <td>{{ product.price }} đ</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.dateAdded }}</td>
            <td>
              <button class="btn btn-warning btn-sm">Sửa</button>
              <button class="btn btn-danger btn-sm" @click="confirmDelete(product.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const products = ref([]);
  
  // Hàm lấy dữ liệu sản phẩm từ API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://localhost:8080/fruits/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); 
      products.value = data; 
    } catch (error) {
      console.error('Có lỗi xảy ra khi lấy danh sách sản phẩm:', error);
    }
  };
  
  // Hàm xóa sản phẩm
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`https://localhost:8080/fruits/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Sau khi xóa thành công, cập nhật lại danh sách sản phẩm
      products.value = products.value.filter(product => product.id !== id);
      console.log(`Sản phẩm có id ${id} đã được xóa`);
    } catch (error) {
      console.error('Có lỗi xảy ra khi xóa sản phẩm:', error);
    }
  };
  
  // Hàm xác nhận xóa sản phẩm
  const confirmDelete = (id) => {
    const isConfirmed = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
    if (isConfirmed) {
      deleteProduct(id); // Nếu người dùng nhấn OK, tiến hành xóa sản phẩm
    } else {
      console.log('Hủy hành động xóa');
    }
  };
  
  onMounted(() => {
    fetchProducts();
  });
  </script>
  
  <style scoped>
  .table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }
  
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  .table th {
    background-color: #f2f2f2;
  }
  
  .product-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  
  .btn {
    padding: 6px 12px;
    border: none;
    cursor: pointer;
    margin-right: 5px;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
  }
  
  .btn-warning {
    background-color: #ffc107;
    color: white;
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: white;
  }
  
  .btn-sm {
    font-size: 12px;
  }
  </style>
  