<template>
    <div>
      <h1>Chi tiết bài viết</h1>
      <div v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </div>
      <div v-else>
        <p>Bài viết không tồn tại.</p>
      </div>
    </div>
  </template>

<script>
export default {

}
</script>

<style>

</style>