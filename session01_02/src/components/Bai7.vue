<template>
    <div class="box">
        <HeaderVue class="header"></HeaderVue>
        <MenuVue class="menu"></MenuVue>
        <MainVue class="main"></MainVue>
        <FooterVue class="footer"></FooterVue>
    </div>
</template>
<script setup>
    import FooterVue from "./Footer.vue";
    import HeaderVue from "./Header.vue";
    import MainVue from "./Main.vue";
    import MenuVue from "./Menu.vue";

</script>
<style scoped>
    .box{
        position: relative;
        
    }
    .header {
  position: absolute;
}

.main{
    position: absolute;
    top: 300px;
    left: 60%;
}

.footer {
    position: absolute;
    top: 680px;
    width: 75%;
    left: 370px;
  
}
</style>