import SecondPage from '@/pages/SecondPage';
import MainPage from '@/pages/MainPage';
import AboutPage from '@/pages/AboutPage';

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/items',
    component: SecondPage
  },
  {
    path: '/about',
    component: AboutPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
