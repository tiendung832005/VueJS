<template>
    <div>
      
      <router-view></router-view>
      <!-- <router-view v-slot = "{Component}">

        <Suspense>
            Hiển thị các component sử dụng cơ chế lazy
           <template #default>
            <component :is="Component"></component>
           </template>

            < Sử dụng hiệu ứng loading khi tải trang
           <template #fallback>
              <div class="loading-spinner">Loading...</div>
           </template>
        </Suspense>
      </router-view> -->
    </div>
</template>

<script>

</script>

<style>

</style>