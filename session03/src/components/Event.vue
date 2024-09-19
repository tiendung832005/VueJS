<template>
    <div>
        <button v-on:click="handleClick">click me</button>
        <button v-on:click="handleDelete">Delete</button>
        <button @click="getEvent">Enven info</button>
        <form action="" @submit.prevent="handleSubmit">
            <button type="submit">Submit</button>
        </form>

        <button @keydown.esc="handleClose">Đóng form</button>
    </div>
</template>
<script setup>
    const handleClick = ()=>{
        console.log("CLicked");     
    }
    const handleDelete=()=>{
        console.log("Deleted");
    }
    const getEvent = (e)=>{
        console.log("event", e);
        
    }
    const handleSubmit = (e)=>{
        alert("submited")
    }
    const handleClose = ()=>{
        alert("Form closed");
    }
</script>
<style scoped>
    
</style>