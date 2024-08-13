import {createApp} from 'vue'
import App from './App.vue'
import {setupI18n} from "@/locales";
import router from "@/router";
import store from "@/store";
import "./styles/index.less"
import "vant/es/dialog/style";
import "vant/es/notify/style";
import "vant/es/toast/style";
import {setupGuard} from "@/router/routeGuard.ts";
const app = createApp(App)
setupI18n(app)
setupGuard()
app.use(router).use(store).mount('#app')
