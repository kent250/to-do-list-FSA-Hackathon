import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes' // this import file with all app routes


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  history: createWebHistory(),
})


export default router
