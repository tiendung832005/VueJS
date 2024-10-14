<template>
    <div>
        <h1>Count: {{ count }}</h1>
        <button @click="handleIncrement">Increment</button>
        <br>
        <button @click="handleDecrement">Decrement</button>
        <br>
        <button @click="handleReset">Reset</button>
    </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore()

  const count = computed(()=> store.state.countModule.count);

  const handleIncrement = () => {
    store.commit('increment');
  }
  const handleDecrement = () => {
    store.commit('decrement');
  }
  const handleReset = () => {
    store.commit('reset');
  }
</script>

<style>

</style>