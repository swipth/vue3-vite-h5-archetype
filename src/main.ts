import {createApp} from 'vue'
import App from './App.vue'
import {setupI18n} from "@/locales";
import router from "@/router";
import store from "@/store";
import "./styles/index.less"

const app = createApp(App)
setupI18n(app)
app.use(router).use(store).mount('#app')
