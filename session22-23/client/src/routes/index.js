// router.js
import { createRouter, createWebHistory } from 'vue-router';
import ListPost from './components/ListPost.vue';

const routes = [
  {
    path: '/list-post',
    name: 'ListPost',
    component: ListPost,
  },
  // Bạn có thể thêm các route khác ở đây
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
