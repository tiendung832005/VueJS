<template>
    <div>
        <h1>List</h1>
        <ul v-for="list in user" :key="list.id">
            <li>Id: {{ list.id }}</li>
            <li>Name: {{ list.name }}</li>
        </ul>
    </div>
</template>
<script setup>
    const user = [
        {
            id:"1",
            name: "john"
        },
        {
            id:"2",
            name: "david"
        },
    ]
</script>
<style lang="">
    
</style>