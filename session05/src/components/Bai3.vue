<template>
    <div>
        <h1>Bài 3</h1>
        <p v-if="role=== 'admin'">Quyền hạn của bạn là : {{ role }}</p>
        <p v-else-if="role === 'user'">Quyền hạn của bạn là : {{ role }}</p>
        <p v-else-if="role === 'guest'">Quyền hạn của bạn là : {{ role }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
    const role = ref('admin')
</script>
<style lang="">
    
</style>