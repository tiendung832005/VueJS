<template>
  <div>
    <!-- <h1>Home</h1>
    <hr>
    <ParentComponent></ParentComponent>

    <BaseButton title="Click me"></BaseButton>

    <Slot>
      <a href="">Facebook</a>
    </Slot>
    <BaseButton>
      <a href="">Click me</a>
    </BaseButton> -->
    <ParentB1></ParentB1>
    <hr>
    <ParentB2></ParentB2>
    <hr>
    <Parent3></Parent3>
    <hr>
    <Parent4></Parent4>
    <hr>
    <div>
      <h1>Bài 5</h1>
    <button @click="showModal = true">Mở Modal</button>
    <Modal :isVisible="showModal" @close="showModal = false">
      <template #header>
        <h2>Thông báo từ hệ thống</h2>
      </template>
      <template #body>
        <p>Đây là nội dung của modal. Bạn có thể đóng modal bằng cách nhấn vào nút 'Close'.</p>
      </template>
    </Modal>
  </div>
  <hr>
  <h1>Bài 6</h1>
  <Card>
      <template #header>
        Thông tin sản phẩm
      </template>
      <template #body>
        Đây là mô tả ngắn gọn về sản phẩm này. Sản phẩm có các tính năng nổi bật và giá cả hợp lý.
      </template>
      <template #footer>
        <button @click="showDetails">Xem chi tiết</button>
      </template>
    </Card>
    <hr>
    <Parent7></Parent7>
    <hr>
    <Parent8></Parent8>
  </div>
</template>
<script setup>
  // import ParentComponent from './components/ParentComponent.vue';
  // import BaseButton from './components/BaseButton.vue';
  // import Slot from './components/Slot.vue';
  // const handleClick = () => {
  //   console.log("clicked");
  // }
  import ParentB1 from './components/Bai1/ParentB1.vue';
  import ParentB2 from './components/Bai2/ParentB2.vue';
  import Parent3 from './components/Bai3/Parent3.vue';
  import Parent4 from './components/Bai4/Parent4.vue';
  import Modal from './components/Bai5/Modal.vue';
  import Card from './components/Bai6/Card.vue';
  import Parent7 from './components/Bai7/Parent7.vue';
  import Parent8 from './components/Bai8/Parent8.vue';
  import { ref } from 'vue';

  const showModal = ref(false);
  const showDetails = () => {
  alert("Chi tiết sản phẩm!");
};
</script>
<style scoped>
  button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>