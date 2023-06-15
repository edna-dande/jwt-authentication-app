import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Welcome from '../views/WelcomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
