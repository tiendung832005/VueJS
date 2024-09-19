<template>
    <div>
        <h1>Bài 6</h1>
        <input v-model.number="inputValue" type="number">
        <button @click="addToCart">Add to cart</button>
        <p>Tổng tiền là: {{ cal }}</p>
    </div>
</template>
<script setup>
import {ref, computed} from "vue"
    // lưu tổng tiền
    const sum = ref(0) 
    // lưu dữ liệu input
    const inputValue = ref(0)
    // tính tiền
    const cal = computed(()=>sum.value)
    //  thao tác nhân snuts
    const addToCart = () =>{
        sum.value += inputValue.value;
        inputValue.value = 0;
    }
</script>
<style>
    
</style>