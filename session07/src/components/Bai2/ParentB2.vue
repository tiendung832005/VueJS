<template>
    <Children :idProps="id" :nameProps="propductName" :priceProps="price" :quantityProps="quantity"></Children>
</template>

<script setup>
import Children from './Children.vue';
    const id = 1;
    const propductName = "Bười Ba Roi"
    const price = "12.000 đ";
    const quantity = 10;
</script>

<style>

</style>