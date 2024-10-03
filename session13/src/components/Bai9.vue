<template>
    <v-container>
      <v-row>
        <!-- Basic Layout Form -->
        <v-col cols="12" md="6">
          <v-card class="pa-5">
            <v-card-title>Basic Layout</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Name" v-model="name" outlined></v-text-field>
                <v-text-field label="Company" v-model="company" outlined></v-text-field>
                <v-text-field label="Email" v-model="email" outlined></v-text-field>
                <v-text-field label="Phone No" v-model="phone" outlined></v-text-field>
                <v-textarea label="Message" v-model="message" outlined></v-textarea>
                <v-btn color="blue" dark>Send</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
  
        <!-- Basic with Icons Form -->
        <v-col cols="12" md="6">
          <v-card class="pa-5">
            <v-card-title>Basic with Icons</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Name"
                  v-model="name"
                  outlined
                  prepend-icon="mdi-account"
                ></v-text-field>
                <v-text-field
                  label="Company"
                  v-model="company"
                  outlined
                  prepend-icon="mdi-office-building"
                ></v-text-field>
                <v-text-field
                  label="Email"
                  v-model="email"
                  outlined
                  prepend-icon="mdi-email"
                ></v-text-field>
                <v-text-field
                  label="Phone No"
                  v-model="phone"
                  outlined
                  prepend-icon="mdi-phone"
                ></v-text-field>
                <v-textarea
                  label="Message"
                  v-model="message"
                  outlined
                  prepend-icon="mdi-message-text"
                ></v-textarea>
                <v-btn color="blue" dark>Send</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const company = ref('');
  const email = ref('');
  const phone = ref('');
  const message = ref('');
  </script>
  
  <style scoped>
  .v-card {
    max-width: 100%;
  }
  </style>
  