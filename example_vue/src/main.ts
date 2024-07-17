import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from "pinia";
import { router } from "./app/router";
import App from './App.vue'

const pinia = createPinia()

const app = createApp(App);
app.use(pinia);
app.use(router);

router.isReady().then(() => {
    app.mount("#app");
});
