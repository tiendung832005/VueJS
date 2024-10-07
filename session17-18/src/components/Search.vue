<template>
    <div>
        <input type="text" v-model="keySearch">
        <button @click="handleSearch">Tìm kiếm</button>
        <p>value: {{ keySearch }}</p>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

    const keySearch = ref("")
    const router = useRouter();
    const handleSearch = ()=>{
        router.push(`search?q=${keySearch.value}`);
    }
</script>

<style>

</style>