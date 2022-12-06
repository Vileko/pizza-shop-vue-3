import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BasketV from '../views/BasketV.vue'
import DrinksV from '../views/DrinksV.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bakset',
    name: 'bakset',
    component: BasketV
  },
  {
    path: '/drinks',
    name: 'drinks',
    component: DrinksV
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
