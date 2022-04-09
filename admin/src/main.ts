import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
//引用ant design
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
//引用tailwind css
import "./index.css";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);
app.mount("#app");
