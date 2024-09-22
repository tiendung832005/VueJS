<template>
    <div>
        <h1>Bài 2</h1>
        <button v-if="isShow" @click="btn">Hiện</button>
        <button v-else @click="btn">Ẩn</button>

    </div>
</template>
<script setup>
    import {ref} from "vue"
    const isShow = ref(true)
    const btn = () => {
        isShow.value =!isShow.value
    }
</script>
<style lang="">
    
</style>