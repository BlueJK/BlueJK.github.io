import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('../views/Home.vue'),
    },
    {
      name: 'Projects',
      path: '/projects',
      component: () => import('../views/Projects.vue'),
    },
    {
      name: 'Contacts',
      path: '/contacts',
      component: () => import('../views/Contacts.vue'),
    },
    {
      name: 'Project',
      path: '/projects/:name',
      component: () => import('../views/ProjectName.vue'),
    },
  ],
})

export default router