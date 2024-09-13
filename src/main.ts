import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import WebSocket from '@/plugins/WebSocket'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(WebSocket, import.meta.env.VITE_WS_URL)
app.use(ElementPlus)

app.mount('#app')

