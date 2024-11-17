import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/applications',
      name: 'applications',
      component: () => import('../views/Applications.vue')
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import('../views/Careers.vue')
    }
  ]
})

export default router