import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import "element-plus/dist/index.css";

createApp(App).use(store).use(ElementPlus).use(router).mount("#app");
