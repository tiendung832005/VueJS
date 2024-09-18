<template>
    <div class="box">
        <h1>Bài 8</h1>
    <Header2Vue></Header2Vue>
    <NavVue></NavVue>
    <div class="content">
      <Menu2Vue></Menu2Vue>
      <Main2Vue></Main2Vue>
      <ArticleVue></ArticleVue>
    </div>
  </div>
</template>
<script setup>
    import Menu2Vue from "./Menu2.vue";
    import Main2Vue from "./Main2.vue";
    import ArticleVue from "./Artice.vue";
    import Header2Vue from "./Header2.vue";
    import NavVue from "./Nav.vue";
</script >
<style scoped>
    .box {
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 200px 1fr 200px;
  height: 100vh;
}

.header {
  grid-column: 1 / 4;
}

.navigation {
  grid-column: 1 / 4;
}

.content {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 10px;
  height: 100%;
}

.menu {
  grid-column: 1;
}

.main-content {
  grid-column: 2;
}

.article {
  grid-column: 3;
}
</style>