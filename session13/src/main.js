import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import "vuetify/styles"; //styles cho các components
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Khởi tạo ứng dụng
const app = createApp(App);

const vuetify = createVuetify({
  components: components,
  directives: directives,
});

// Sử dụng các thư viện bên ngoài
app.use(vuetify);
// Gán components App vào trong ứng dụng
app.mount("#app");

