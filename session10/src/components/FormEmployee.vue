<template>
    <div>
      <!-- Form thêm mới nhân viên -->
      <div class="overlay" hidden>
        <form class="form" @submit.prevent="handleSubmit">
          <div class="d-flex justify-content-between align-items-center">
            <h4>Chỉnh sửa nhân viên</h4>
            <i @click="handleClose" class="fa-solid fa-xmark"></i>
          </div>
          <div>
            <label class="form-label" for="userName">Họ và tên</label>
            <input v-model="employee.name" id="userName" type="email" class="form-control" />
            <!-- <div class="form-text error">Họ và tên không được để trống.</div> -->
          </div>
          <div>
            <label  class="form-label" for="dateOfBirth">Ngày sinh</label>
            <input v-model="employee.dateOfBirth" id="dateOfBirth" type="date" class="form-control" />
          </div>
          <!-- <div class="form-text error">
            Ngày sinh không được lớn hơn ngày hiện tại.
          </div> -->
          <div>
            <label class="form-label" for="email">Email</label>
            <input v-model="employee.email" id="email" type="text" class="form-control" />
          </div>
          <!-- <div class="form-text error">Email không được để trống.</div> -->
          <div>
            <label class="form-label" for="address">Địa chỉ</label>
            <textarea v-model="employee.address" class="form-control" id="address" rows="3"></textarea>
          </div>
          <div>
            <button class="w-100 btn btn-primary">Thêm mới</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
      // Bước 1: Tạo emit
      const emit = defineEmits("onClose")
  
      // Hàm bắn emit
      const handleClose = () =>{
          emit("onClose")
      }
  
      const employee = reactive({
          id: Math.floor(Math.random()*10000000),
          name: "",
          dateOfBirth: "",
          email: "",
          address: "",
          status: true,
      })
  
      const formatDate = ()=>{
          const today = new Date();
  
          const day = today.getDate().toString().padStart(2,0);
  
          const month = (today.getMonth()+1).toString().padStart(2,0);
  
          const year = today.getFullYear();
  
          return `${year}-${month}-${day}`
      }
      const nameError = ref("");
      const EmailError = ref("");
      const addressError = ref("");
      const handleSubmit = ()=>{
          if(!employee.name){
              nameError.value = "tên không được để trống"
          }else{
              nameError.value = "";
          }
          
          if(employee.dateOfBirth > formatDate()){
              dateOfBirth.value = 'Ngày sinh không được lớn hơn ngày hiện tại'
          }else{
              dateOfBirth.value = "";
          }
      }
  </script>
  
  <style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-size: 14px;
    font-family: sans-serif;
  }
  
  .main {
    /* height: 100vh; */
    margin: 50px 100px;
  }
  
  .fa-arrows-rotate {
    font-size: 20px;
    cursor: pointer;
    color: gray;
  }
  
  .fa-arrows-rotate:hover {
    color: rgb(184, 180, 180);
    transform: rotate(20deg);
    transition: all 0.5s linear;
  }
  
  .button {
    padding: 4px 12px;
    line-height: 30px;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }
  
  .button-edit {
    background-color: orange;
  }
  
  .button-delete {
    background-color: red;
  }
  
  .button-block {
    background-color: green;
  }
  
  td:first-child,
  td:nth-child(6),
  td:nth-child(7) {
    text-align: center;
  }
  
  .form-select {
    width: 270px !important;
  }
  
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .form {
    background-color: #fff;
    width: 500px;
    padding: 20px 24px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .form-label {
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .fa-xmark {
    font-size: 20px;
    cursor: pointer;
  }
  
  .error {
    color: red !important;
  }
  
  .status-container {
    border: 1px solid #dadada;
    padding: 4px 8px;
    border-radius: 4px;
  }
  
  .status {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid transparent;
  }
  
  .status-active {
    background-color: green;
  }
  
  .status-stop {
    background-color: red;
  }
  
  .modal-custom {
    background-color: #fff;
    padding: 20px 24px;
    border-radius: 4px;
    width: 400px;
  }
  
  .modal-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .modal-body-custom {
    padding: 20px 0;
  }
  
  .modal-footer-custom {
    display: flex;
    justify-content: end;
    gap: 8px;
  }
  
  .pagination {
    margin-bottom: 0;
  }
  </style>