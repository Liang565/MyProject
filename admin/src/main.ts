import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
//引用tailwind css
import "./index.css";
//引用ant design
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css"; //vant
import vant from "vant";
import "vant/lib/index.css";
import "@icon-park/vue-next/styles/index.css";
import { install } from "@icon-park/vue-next/es/all";

const app = createApp(App);
app.use(vant);

app.use(createPinia());
app.use(router);
app.use(Antd);
install(app);
app.mount("#app");
