import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import TestPage from '../components/TestPage.vue'
import Floor3rd from '../components/3rdFloor.vue'
import FloorSelect from '../components/FloorSelect.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/test',
    name: 'Test',
    component: TestPage
  },
  {
    path: '/3rd-floor',
    name: '3rdFloor',
    component: Floor3rd
  },
  {
    path: '/floor-select',
    name: 'FloorSelect',
    component: FloorSelect
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
