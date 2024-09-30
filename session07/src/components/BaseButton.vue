<template>
    <!-- B2: Phát sự kiện thông qua emit -->
    <div >
        <button @click="handleClick">
            <slot></slot>
        </button>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            default: "Click me 1",
            type: String,
            required: true,
        }
    })
    console.log("Props", props);
    const emit = defineEmits(["onclick"])

    const handleClick = () =>{
        emit("onclick", "Xin chào các bạn")
    }
</script>

<style>

</style>