<template>
    <div>
        <h1>Bài 2</h1>
        <h1>Dữ liệu trong component con</h1>
        <h3>Id: {{ idProps }}</h3>
        <h3>Product Name: {{ nameProps }}</h3>
        <h3>Price: {{ priceProps }}</h3>
        <h3>Quantity: {{ quantityProps }}</h3>
    </div>
</template>

<script setup>
const {idProps, nameProps, priceProps, quantityProps} = defineProps(
    ["idProps", "nameProps", "priceProps", "quantityProps"]);


</script>

<style>

</style>