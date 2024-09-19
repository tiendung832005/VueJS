<template>
    <div>
      <img v-bind:src="url"
      alt="">
      <button v-bind:disabled="isDisabled">Click me</button>
  
      <input type="text" v-bind:disabled="isEnter">
      <div v-bind="divAttributes">container</div>
  
      <!-- Binding 2 thuộc tính id: "paragraph", area="paragraph" -->
       <p v-bind="paragraphAttributes">Nội dung</p>
       <!-- v-bind cho  -->
        <div v-bind:class="{textRed: isTextRed}">Hello World</div>
    </div>
  </template>
  <script setup>
    
    const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_tabby_and_white_kitten_n01.jpg/450px-Golden_tabby_and_white_kitten_n01.jpg"
    const isDisabled = false;
    const isEnter = true;
  
    const divAttributes = {
      id: "container-id",
      class: "container-class"
    }
    const paragraphAttributes = {
      id: "paragraph",
      area: "paragraph"
    }
    const isTextRed = true;
  </script>
  <style scoped>
    text-red{
      color: red;
    }
  </style>