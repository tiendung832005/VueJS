<template>
    <div>
        <h1>Bài 5</h1>
        <h3>Thông tin cá nhân</h3>
        <li>Họ và tên: <b>{{ name }}</b></li>
        <li>Giới tính:<b>{{ gender }}</b></li>
        <li>Ngày sinh:<b>{{ birthday }}</b></li>
        <li>Email:<b>{{ email }}</b></li>
        <li>Địa chỉ:<b>{{ address }}</b></li>
    </div>
</template>
<script setup>
    const name =  "Nguyễn Văn A"
    const gender = "Nam"
    const birthday= "06/03/2024"
    const email= "nva@gmail.com"
    const address= "Thanh Xuân, Hà Nội"
</script>
<style lang="">
    
</style>