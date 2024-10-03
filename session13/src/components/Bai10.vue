<template>
    <div>
        <h1>Bài 10</h1>
        <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
  >
    <template>
      <v-chip
        :color="getStatusColor(slotProps.item.status)"
        text-color="white"
        small
      >
        {{ slotProps.item.status }}
      </v-chip>
    </template>
    <template>
      Items per page
    </template>
  </v-data-table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const headers = ref([
    { text: 'Name', value: 'name' },
    { text: 'Project Name', value: 'projectName' },
    { text: 'Post', value: 'post' },
    { text: 'Status', value: 'status' },
    { text: 'Budget', value: 'budget' },
  ]);
  
  const items = ref([
    { name: 'Sunil Joshi', projectName: 'Elite Admin', post: 'Web Designer', status: 'Active', budget: '$3.9k' },
    { name: 'Andrew McDownland', projectName: 'Real Homes WP Theme', post: 'Project Manager', status: 'Pending', budget: '$24.5k' },
    { name: 'Christopher Jamil', projectName: 'MedicalPro WP Theme', post: 'Project Manager', status: 'Completed', budget: '$12.8k' },
    { name: 'Nirav Joshi', projectName: 'Hosting Press HTML', post: 'Frontend Engineer', status: 'Active', budget: '$2.4k' },
    { name: 'Micheal Doe', projectName: 'Helping Hands WP Theme', post: 'Content Writer', status: 'Cancel', budget: '$9.3k' },
  ]);
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'green';
      case 'Pending':
        return 'orange';
      case 'Completed':
        return 'blue';
      case 'Cancel':
        return 'red';
      default:
        return 'grey';
    }
  };
  </script>
  
  <style scoped>
  .v-data-table {
    margin-top: 20px;
  }
  </style>
  