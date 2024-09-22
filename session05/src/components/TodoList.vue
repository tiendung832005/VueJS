<template>
  <div class="container">
     <div class="todo">
       <h3 class="heading">Danh sách công việc</h3>
       <header class="header">
         <input type="text" v-model="newJob" class="input" placeholder="Nhập công việc" />
         <button class="button button-add" @click="addJob">Add job</button>
       </header>
 
       <ul class="list-item">
         <li class="item" v-for="(job, index) in jobs" :key="index">
           <div class="left">
             <input type="checkbox" v-model="job.done" />
             <input v-if="job.editing" type="text" v-model="job.text" @blur="finishEditJob(index)" />
             <label v-else @dblclick="editJob(index)">{{ job.text }}</label>
           </div>
           <div class="right">
             <button class="button button-delete" @click="deleteJob(index)">Delete</button>
           </div>
         </li>
       </ul>
 
       <footer class="footer">
         <p>Công việc hoàn thành:</p>
         <p><b>{{ completedJobs }}</b> / <b>{{ jobs.length }}</b></p>
       </footer>
     </div>
   </div>
 </template>
<script setup>
import { ref, reactive, computed } from 'vue';

const newJob = ref('');
const jobs = reactive([]);

// Hàm thêm công việc mới
const addJob = () => {
  if (newJob.value.trim()) {
    jobs.push({ text: newJob.value, done: false, editing: false });
    newJob.value = ''; 
  }
};

// Hàm sửa công việc
const editJob = (index) => {
  jobs[index].editing = true;
};

// Hàm hoàn tất sửa công việc
const finishEditJob = (index) => {
  jobs[index].editing = false;
};

// Hàm xóa công việc
const deleteJob = (index) => {
  jobs.splice(index, 1);
};

// Tính toán số công việc hoàn thành
const completedJobs = computed(() => {
  return jobs.filter(job => job.done).length;
});
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heading {
  text-align: center;
  font-size: 24px;
  padding-bottom: 24px;
}

.todo {
  width: 600px;
  border: 1px solid #dadada;
  padding: 20px 24px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
}

.input {
  height: 36px;
  border: 1px solid #dadada;
  outline: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  flex: 1;
  padding: 0 16px;
}

.button {
  height: 36px;
  border: 1px solid transparent;
  color: #fff;
  outline: none;
  border-radius: 4px;
  padding: 0 16px;
  cursor: pointer;
}

.button-add {
  background-color: blue;
}

.button-delete {
  background-color: red;
}

.list-item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input[type="checkbox"] {
  height: 18px;
  width: 18px;
}

.left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.right {
}

.footer {
  display: flex;
  gap: 8px;
}
</style>