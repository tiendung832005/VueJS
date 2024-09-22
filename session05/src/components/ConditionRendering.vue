<template>
    <div>
        <!--  -->
        <h1>Tuổi: {{ age }}</h1>
      <h1 v-if="age >= 18">Đủ tuổi thi</h1>
      <h1 v-else>Chưa đủ tuổi thi</h1>
      <button @click="increase">Tăng tuổi</button>
      <button @click="decrease">Giảm tuổi</button>

      <!--  -->
      <h1 v-if="role === 'admin'">Quyền admin</h1>
      <h1 v-else-if="role === 'user'">Quyền user</h1>
      <h1 v-else-if="role === 'edit'">Quyền edit</h1>
      <h1 v-else>Quyền khác</h1>


    </div>
</template>
<script setup>
import {ref} from "vue";
    const age = ref(13)
    // const role =ref(admin)
    const increase = ()=>{
        age.value ++
    }
    const decrease = ()=>{
        age.value --
    }
</script>
<style lang="">
    
</style>