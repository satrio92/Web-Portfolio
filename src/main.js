import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/index"
import VueScrollTo from 'vue-scrollto'

createApp(App).use(router).use(VueScrollTo).mount('#app')
