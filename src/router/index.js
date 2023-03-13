import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [

  {
    path: '/counter',
    name: 'MainPage',
    component: MainPage,
  },
{
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

