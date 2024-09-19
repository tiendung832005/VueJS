<template>
    <div>
        <h1>Bài 8</h1>
        <a v-bind:ref="url" @click="check">{{ url }}</a>
    </div>
</template>
<script setup>
    const url = "https://www.google.com"
    const check= (e)=>{
        if(!this.url.startsWith("https://")){
            alert("Đường dẫn không hợp lệ")
            e.preventDefault();
            
        }else{

        }
    }
</script>
<style>
    
</style>