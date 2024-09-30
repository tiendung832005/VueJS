<template>
    <div>
        <h1>ParentComponent</h1>
        <h3>Parent Company: {{ username }}</h3>
        <h3>Age of Parent: {{ age }}</h3>
        <hr>

        <!-- Sử dụng component con -->
        <!-- B2: Trong component cha, gọi props đc khai báo bên con và truyền giá trị cho nó-->
        <ChildrenComponent :userName="username" :ageProps="age" :userInfoProps="userInfo"></ChildrenComponent>
    </div>
</template>
<script setup>
import ChildrenComponent from './ChildrenComponent.vue';

const username = "Rikkei Academy"

const age = 20

const userInfo = {
    id: 1,
    name: "Nguyễn Văn A",
    age: 21
}
</script>
<style lang="">
    
</style>