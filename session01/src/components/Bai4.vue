<template>
    <div>
        <h1>Bài 4</h1>
        <p>{{ a }} + {{ a }} = {{ sum }}</p>
        <p>{{ a }} - {{ a }} = {{ sub }}</p>
        <p>{{ a }} * {{ a }} = {{ mul }}</p>
        <p>{{ a }} ? {{ a }} = {{ div }}</p>


    </div>
</template>
<script setup>
const a = 10
const sum = 10 + 10
const sub = 10 - 10
const mul = 10 * 10
const div = 10 / 10

</script>
<style lang="">

</style>