<template >
    <div>
        <h1>Computed</h1>
        <p>Tại vị trí thứ {{ index }} thì số FIb = {{ calculateFibonacy(index) }}</p>

        <button></button>
    </div>
</template>
<script setup>
    const index = ref(0);

    const calculateFibonacy = (n)=>{
        const fib = (n) => {
            if(n <= 1) return n;
            return fib(n-1) + fib(n-2);
        };
        return fib(n);
    }
</script>
<style>
    
</style>