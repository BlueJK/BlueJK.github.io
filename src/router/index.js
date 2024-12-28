import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('../views/Home.vue'),
    },
    {
      name: 'CV',
      path: '/cv',
      component: () => import('../views/CV.vue'),
    },
    {
      name: 'Contacts',
      path: '/contacts',
      component: () => import('../views/Contacts.vue'),
    },
  ],
})

export default router
