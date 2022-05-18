import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import "vant/lib/index.css";

import App from "./App.vue";
import router from "./router";
import Vant from "vant";
// import { install } from "@icon-park/vue-next/es/all";
import "@icon-park/vue-next/styles/index.css";
import { install } from "@icon-park/vue-next/es/all";
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Vant);
install(app);
// install(app, "i");
// install(app);
app.mount("#app");