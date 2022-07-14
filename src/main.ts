import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import one from './components/one.vue'
import two from './components/two.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: one},
    {path: '/xxx', component: two}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
