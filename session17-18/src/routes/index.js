import { createRouter, createWebHistory } from "vue-router";

// Định nghĩa biến lưu vị trí cuộn
let scrollPositions = {};

// B1: Định nghĩa danh sách các router
const routes = [
  {
    path: "/",
    alias: ["/home", "/home-page", "/trang-chu"],
    component: () => import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
    name: "home",
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/AboutPage.vue"),
    name: "about",
  },
  {
    path: "/contact",
    component: () => import(/* webpackChunkName: "contact" */ "@/views/ContactPage.vue"),
    alias: ["/get-in-touch"],
    name: "contact",
  },
  {
    path: "/feedback",
    component: () => import(/* webpackChunkName: "feedback" */ "@/views/FeedBack.vue"),
    name: "feedback",
  },
  {
    path: "/search",
    component: () => import(/* webpackChunkName: "search" */ "@/components/Search.vue"),
    name: "search",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "notfound" */ "@/components/NotFound.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "@/components/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import(/* webpackChunkName: "dashboard" */ "@/components/Dashboard.vue"),
    beforeEnter: (to, from, next) => {
      const isLogin = true; // giả sử người dùng đã đăng nhập
      if (to.path === "/dashboard" && !isLogin) {
        // Chuyển hướng về trang login nếu chưa login
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/admin",
    component: () => import(/* webpackChunkName: "admin" */ "@/components/Admin.vue"),
    children: [
      {
        path: "manager-user",
        component: () => import(/* webpackChunkName: "users" */ "@/components/User.vue"),
        name: "managerUser",
      },
      {
        path: "manager-product",
        component: () => import(/* webpackChunkName: "products" */ "@/components/Products.vue"),
        name: "managerProduct",
      },
      {
        path: "setting",
        component: () => import(/* webpackChunkName: "setting" */ "@/components/Settings.vue"),
        name: "setting",
      },
    ],
  },
  {
    path: "/posts",
    name: "ListPost",
    component: () => import(/* webpackChunkName: "listpost" */ "@/components/ListPost.vue"),
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: () => import(/* webpackChunkName: "postdetail" */ "@/components/PostDetail.vue"),
  },
  {
    path: "/posts/not-found",
    name: "PostNotFound",
    component: () => import(/* webpackChunkName: "postnotfound" */ "@/components/PostNotFound.vue"),
  },
];

// Tạo scrollBehavior
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else if (to.name === 'PostDetail') {
    return { left: 0, top: document.body.scrollHeight / 2 };
  } else if (to.name === 'PostNotFound') {
    return { left: 0, top: 0 };
  } else if (from.name === 'PostDetail' && to.name === 'ListPost') {
    return scrollPositions['/posts'] || { left: 0, top: 0 };
  }
  return { left: 0, top: 0 };
};

// Tạo router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

// Sử dụng beforeEach để lưu vị trí cuộn trước khi chuyển trang
router.beforeEach((to, from, next) => {
  if (from.name === 'ListPost') {
    scrollPositions[from.fullPath] = { left: window.pageXOffset, top: window.pageYOffset };
  }
  next();
});

export default router;
