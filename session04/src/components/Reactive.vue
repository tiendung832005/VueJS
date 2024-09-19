<template>
    <div>
        <p>Id: {{ userInfo.id }}</p>
        <p>Tên: {{ userInfo.name }}</p>

        <button @click="handleId">IncreaseId</button>

    </div>
</template>
<script>
    const userInfo = reactive( {
        id: 1,
        name: 'Nguyễn Văn B'
    });
    const handleId = ()=>{
        userInfo.id++;
    }
</script>
<style>
    
</style>