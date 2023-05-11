import { createApp } from 'vue'
import './assets/scss/style.css'
import router from './router/router'
import 'tippy.js/dist/tippy.css';
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.mount('#app')
