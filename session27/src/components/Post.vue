<template>
    <div>
        <h1>List Post</h1>
        <h2>Loading: {{ isLoading }}</h2>
        <h2>Data: {{ data }}</h2>
        <h2>Error: {{ error }}</h2>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

   const store = useStore();

   const isLoading = computed(()=>store.state.postModule.loading);
   const data = computed(()=>store.state.postModule.data);
   const error = computed(()=>store.state.postModule.error);
    const countPost = computed(() => store.getters.countPost)

   onMounted(()=>{
    store.dispatch("fetchData")
   })
</script>

<style>

</style>