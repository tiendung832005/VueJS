<template>
    <div>
        <h1>Bài 4</h1>
        <div v-bind:class="{active: isActive}" v-bind:style="{ backgroundColor: backgroundColor }" class="box">
            
            Block
        </div>
    </div>
</template>
<script setup>
import {ref} from "vue"
    const isActive = ref(true);
    const backgroundColor = "blue"
</script>
<style scoped>
    .active {
  color: #fff;
}
</style>