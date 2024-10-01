<template>
  <div>
    <form action="" @submit="handleSubmit">
        <h2>UserName: {{ userName }}</h2>
        <h2>Date Of Birth: {{ date }}</h2>
        <h2>Gender: {{ gender }}</h2>
        <h3>Thêm người mới</h3>
        <div>Họ và tên: <input v-model="userName" type="text" placeholder="Nhập tên"></div>
        <div>Ngày sinh: <input v-model="date" type="date"></div>
        <div>Giới tính</div>
        <div>
            Nam <input v-model="gender" type="radio" name="" id="">
            Nữ <input v-model="gender" type="radio" name="" id="">
            Khác <input v-model="gender" type="radio" name="" id="">
        </div>
        <div>Sở thích: </div>
        <div>
            <input value="sing" v-model="hobies" type="checkbox" id=""> Hát
            <input value="game" type="checkbox" id=""> Chơi game
            <input value="travel" type="checkbox" id=""> Đi du lịch
            <input value="soccer" type="checkbox" id=""> Bóng đá
        </div>
        <button>Thêm</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

    const userName = ref("")
    const date = ref("")
    const gender = ref("0")
    const hobies = ref([])

    const userInfo = reactive({
        userName: "",
        date: "",
        gender: "0",
        hobies: [],
    })
    const handleSubmit = (e) =>{
        // Ngăn chặn sự kiện load lại trang
        // e.preventDefault();
        const user = {
            userName: userName.value,
            date: date.value,
            gender: gender.value,
            hobies: hobies.value
        }
    }
</script>

<style>

</style>