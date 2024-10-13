<template>
    <div class="todo-container">
      <h2>Quản lý công việc</h2>
  
      <!-- Hiển thị hiệu ứng loading khi đang tải dữ liệu -->
      <div v-if="loading" class="loading">
        Đang tải dữ liệu...
      </div>
  
      <div v-else>
        <!-- Form thêm công việc -->
        <div class="add-task">
          <input v-model="newTask" type="text" placeholder="Nhập tên công việc" />
          <button @click="addTask">Thêm công việc</button>
        </div>
  
        <!-- Danh sách công việc (có thanh cuộn khi quá 5 công việc) -->
        <ul class="task-list" :class="{ 'scrollable': tasks.length > 5 }">
          <li v-for="task in visibleTasks" :key="task.id">
            <input type="checkbox" v-model="task.isCompleted" />
            <span :class="{ completed: task.isCompleted }">{{ task.name }}</span>
            <button @click="editTask(task.id)">✏️</button>
            <button @click="deleteTask(task.id)">🗑️</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  const tasks = ref([]);
  const newTask = ref('');
  const loading = ref(true);
  
  // Gọi API để lấy danh sách công việc
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/tasks'); // URL của API
      const data = await response.json();
      tasks.value = data;
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    } finally {
      loading.value = false; // Tắt loading sau khi hoàn thành việc gọi API
    }
  };
  
  // Chỉ hiển thị tối đa 5 công việc, các công việc khác sẽ bị ẩn
  const visibleTasks = computed(() => tasks.value.slice(0, 5));
  
  // Thêm công việc mới
  const addTask = () => {
    if (newTask.value.trim() !== '') {
      tasks.value.push({
        id: Date.now(),
        name: newTask.value,
        isCompleted: false
      });
      newTask.value = '';
    }
  };
  
  // Sửa công việc
  const editTask = (id) => {
    const task = tasks.value.find((task) => task.id === id);
    if (task) {
      const newName = prompt('Chỉnh sửa công việc', task.name);
      if (newName !== null && newName.trim() !== '') {
        task.name = newName;
      }
    }
  };
  
  // Xóa công việc
  const deleteTask = (id) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  };
  
  // Khi component được mount, gọi API để lấy danh sách công việc
  onMounted(() => {
    fetchTasks();
  });
  </script>
  
  <style scoped>
  .todo-container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .add-task {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .add-task input {
    flex: 1;
    padding: 8px;
  }
  
  .add-task button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .add-task button:hover {
    background-color: #0056b3;
  }
  
  .task-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .task-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .task-list li .completed {
    text-decoration: line-through;
  }
  
  .scrollable {
    max-height: 200px;
    overflow-y: auto; 
  }
  
  
  .loading {
    font-size: 18px;
    color: #007bff;
  }
  </style>
  