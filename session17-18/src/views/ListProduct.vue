<template>
  <div>
    <h1>List Product</h1>

    <input type="text" v-model="keySearch">
    <input type="number" v-model="priceValue">
    <button @click="handleSearch">Search</button>

    <h1>ProductName: {{ queryParams.productName }}</h1>
    <h2>Price: {{ queryParams.price }}</h2>
  </div>
</template>

<script setup>
    import { computed, reactive, ref } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    const keySearch = ref("");
    const priceValue = ref(0);

    console.log(route.query);
    
    // lấy gtri tren URL và cập nhật cho reactive
    const result =  computed(()=>{
        return{

        }
        queryParams.productName = route.query.productName
        queryParams.price = route.query.price
    })
    const router = useRouter(); // chuyển trang
    const route = useRoute(); // Lấy dữ liệu trên URL
    const handleSearch = () => {
        // router.push(`/list-product?search=${keySearch.value}`)

        router.push({name: "list-product", querry: {productName: keySearch.value}})
    }

    const queryParams = reactive({
        productName: "",
        price: 0,
    })

</script>

<style>

</style>