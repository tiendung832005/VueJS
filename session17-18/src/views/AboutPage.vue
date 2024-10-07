<template>
  <div>
    <h1>About Page</h1>
  <router-view v-slot = "{Component}">

<Suspense>
   <!-- Hiển thị các component sử dụng cơ chế lazy -->
   <template #default>
    <component :is="Component"></component>
   </template>

    <!-- Sử dụng hiệu ứng loading khi tải trang -->
   <template #fallback>
      <div class="loading-spinner">Loading...</div>
   </template>
</Suspense>
</router-view>
  </div>
  
</template>

<script setup>

</script>

<style>

</style>