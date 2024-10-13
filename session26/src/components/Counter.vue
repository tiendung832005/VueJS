<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <h2>Double Counter: {{ doubleCount }}</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

    const store = useStore()

    const count = computed(()=>store.state.countModule.count) ;

    const doubleCount = computed(()=>store.getters.doubleCount) //4
    const increment = () => {
        store.commit('increment');
    };
    const decrement = () => {
        store.commit('decrement');
    };
    const reset = () => {
        store.commit('reset');
    };
</script>

</script>

<style>

</style>