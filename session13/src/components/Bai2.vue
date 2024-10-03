<template>
  <div>
    <h1>Bài 2</h1>
    <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="Email"
      ></v-text-field>
    </v-form>
  </v-sheet>
  </div>
</template>

<script setup>
    
</script>

<style>

</style>