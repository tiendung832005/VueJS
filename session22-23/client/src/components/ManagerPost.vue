<template>
    <div class="container">
      <!-- Search and Filter Section -->
      <div class="search-filter">
        <input 
          type="text" 
          v-model="search" 
          placeholder="Nhập từ khóa tìm kiếm" 
          class="search-input"
        />
        <select v-model="filter" class="filter-select">
          <option value="" disabled selected>Lọc bài viết</option>
          <option value="all">Tất cả</option>
          <option value="published">Đã xuất bản</option>
          <option value="unpublished">Chưa xuất bản</option>
        </select>
        <button class="btn btn-primary">Thêm mới bài viết</button>
      </div>
  
      <div class="table-container">
        <table class="article-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Hình ảnh</th>
              <th>Ngày viết</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(article, index) in paginatedArticles" :key="article.id">
              <td>{{ index + 1 }}</td>
              <td>{{ article.title }}</td>
              <td><img :src="article.image" class="article-image" /></td>
              <td>{{ article.date }}</td>
              <td>
                <span :class="['status', article.status === 'Đã xuất bản' ? 'status-published' : 'status-unpublished']">
                  {{ article.status }}
                </span>
              </td>
              <td>
                <button class="btn btn-warning">Chặn</button>
                <button class="btn btn-info">Sửa</button>
                <button class="btn btn-danger">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import axios from 'axios';
  
  const search = ref('');
  const filter = ref(null);
  const articles = ref([]);
  const perPage = 5;
  
  // Gọi API để lấy danh sách bài viết
  const getArticles = async () => {
    try {
      const response = await axios.get('http://localhost:8080/articles');
      articles.value = response.data;
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  };
  
  // Tính toán danh sách bài viết
  const paginatedArticles = computed(() => {
    return articles.value.slice(0, perPage);
  });
  
  onMounted(() => {
    getArticles();
  });
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .search-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .search-input {
    padding: 10px;
    width: 300px;
  }
  
  .filter-select {
    padding: 10px;
  }
  
  .btn {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: #fff;
  }
  
  .btn-warning {
    background-color: #ffc107;
    color: #fff;
  }
  
  .btn-info {
    background-color: #17a2b8;
    color: #fff;
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: #fff;
  }
  
  .table-container {
    max-height: 400px;
    overflow-y: auto;
  }
  
  .article-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .article-table th,
  .article-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  
  .article-image {
    width: 50px;
    height: 50px;
  }
  
  .status {
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
  }
  
  .status-published {
    background-color: green;
  }
  
  .status-unpublished {
    background-color: orange;
  }
  </style>
  