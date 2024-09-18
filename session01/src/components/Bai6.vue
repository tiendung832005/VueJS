<template>
    <div>
        <h1>Bài 6</h1>
        <p><b>Họ và tên: {{ formatName(user) }}</b></p>
    </div>
</template>
<script setup>
    const user={
        firtName: "Nguyễn Văn",
        lastName: "Nam"
    };
    const formatName = (user) => {
        return `${user.firtName} ${user.lastName}`;
    };
</script>
<style lang="">
    
</style>