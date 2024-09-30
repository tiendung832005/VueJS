<template>
    <div>
        <h1>Bài 1</h1>
        <h1>ParentComponent</h1>
        <h3>Parent Company: {{ username }}</h3>
        <hr>
        <!-- Sử dụng component con -->
        <!-- B2: Trong component cha, gọi props đc khai báo bên con và truyền giá trị cho nó-->
        <ChildrenComponent :userName="username"></ChildrenComponent>
    </div>
</template>
<script setup>
import ChildrenComponent from './Children.vue';

const username = "Rikkei Academy"

</script>
<style lang="">
    
</style>