<template>
    <div>

        <h2>Count: {{ count }}</h2>
        <h2>Random number {{ random }}</h2>
        <button @click="handleCount">Count</button>
        <button @click="handleCount">Random</button>

    </div>
</template>
<script setup>
    import {ref} from "vue"
    const count = ref(0);
    const handleRandom = ()=>{
        // Tạo số ngẫu nhiên
        const random = Math.ceil(Math.random() *10);

        // Cập nhật giá trị cho randomNumber
        randomNumber.value = random;
    }
    const handleCount = () =>{
        count.value++;
    }
    // Khi dùng ref:
    // - Để cập nhật lại giá trị thì bắt buộc phải truy cập vào value
    // - Khi sử dụng thì không cần dùng value
</script>