<template>
  <div>
    <h1>List Product</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="">Name</label>
        <input type="text" v-model="productInfo.name">
      </div>
      <div>
        <label for="">Price</label>
        <input type="number" v-model="productInfo.price">
      </div>
      <div>
        <label for="">Quantity</label>
        <input type="number" v-model="productInfo.quantity">
      </div>
      <button type="submit">Add Product</button>
    </form>

    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td><button @click="deleteProduct(product.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'

const products = ref([])

const loadData = async () => {
  try {
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error loading data:', error)
    return []
  }
}

onMounted(async () => {
  const data = await loadData()
  products.value = data
})

const productInfo = reactive({
  name: '',
  price: 0,
  quantity: 0,
})

const handleSubmit = async () => {
  try {
    const response = await fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productInfo),
    })
    if (response.ok) {
      const newProduct = await response.json()
      products.value.push(newProduct)
    }
  } catch (error) {
    console.error('Error submitting product:', error)
  }
}


</script>

<style>

</style>
