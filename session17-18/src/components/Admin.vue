<template>
    <div>
        <h1>Trang Admin</h1>
        <router-link to="/admin">Dashboard</router-link>
        <router-link to="/admin/manager-user">Users</router-link>
        <router-link to="/admin/manager-product">Products</router-link>
        <router-link to="/admin/setting">Setting</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>