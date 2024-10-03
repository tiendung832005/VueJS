<template>
    <div>
        <h1>Bài 4</h1>
        <div class="text-center">
          <v-menu
            open-on-hover
          >
            <template v-slot:activator="{ props }">
              <v-btn
                color="primary"
                v-bind="props"
              >
                Quản trị viên
              </v-btn>
            </template>
      
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        items: [
          { title: 'Thông tin cá nhân' },
          { title: 'Đổi mật khẩu' },
          { title: 'Đăng xuất' },
        ],
      }),
    }
  </script>
<style>

</style>