import { createApp } from 'vue'
import '@fontsource-variable/montserrat/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { createAppI18n } from './i18n/index.js'

const i18n = createAppI18n()

createApp(App).use(router).use(i18n).mount('#app')
