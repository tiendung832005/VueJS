<template>
    <div>
        <h1>Bài 5</h1>
        <h2>Giỏ hàng</h2>
        <ul>
            <li>Mèn mén loại 1 - Số lượng {{ count1 }}</li>
            <button @click="handleChange1">Tăng số lượng</button>
            <li>Mèn mén loại 2 - Số lượng {{ count2 }}</li>
            <button @click="handleChange2">Tăng số lượng</button>
            <li>Mèn mén loại 3 - Số lượng {{ count3 }}</li>
            <button @click="handleChange3">Tăng số lượng</button>
        </ul>
        <p>Tổng số lượng sản phẩm: {{ cal }}</p>
    </div>
</template>
<script setup>
    import {ref, computed} from "vue"
    const count1 = ref(0);
    const handleChange1 = ()=>{
        count1.value++;
    }
    const count2 = ref(0);
    const handleChange2 = ()=>{
        count2.value++;
    }
    const count3 = ref(0);
    const handleChange3 = ()=>{
        count3.value++;
    }
    const cal = computed(()=>count1.value + count2.value + count3.value)
</script>
<style>
    
</style>