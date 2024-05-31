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
app.use(WebSocket, 'ws://192.168.3.219:9527/ctrl')
app.use(ElementPlus)

app.mount('#app')
