<template>
    <div id="app" data-v-app>
        <h1>Bài 2</h1>
        <h3 v-bind:id="elementId" v-bind:class="elementClass">Heading</h3>
    </div>
</template>
<script setup>
const elementClass = "container";
const elementId = "container";

</script>
<style>
    
</style>