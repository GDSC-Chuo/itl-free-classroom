import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import SignInPage from '../components/SignInPage.vue'
import SignUpPage from '../components/SignUpPage.vue'
import TestPage from '../components/TestPage.vue'
import Floor3rd from '../components/3rdFloor.vue'
import Floor4th from '../components/4thFloor.vue'
import Floor5th from '../components/5thFloor.vue'
import Floor7th from '../components/7thFloor.vue'
import Floor8th from '../components/8thFloor.vue'
import Floor9th from '../components/9thFloor.vue'
import Floor10th from '../components/10thFloor.vue'
import Floor11th from '../components/11thFloor.vue'
import FloorSelect from '../components/FloorSelect.vue'
import ClassInfo from '../components/ClassInfo.vue'
import SearchClass from '../components/SearchClass.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignInPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage
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
    path: '/4th-floor',
    name: '4thFloor',
    component: Floor4th
  },
  {
    path: '/5th-floor',
    name: '5thFloor',
    component: Floor5th
  },
  {
    path: '/7th-floor',
    name: '7thFloor',
    component: Floor7th
  },
  {
    path: '/8th-floor',
    name: '8thFloor',
    component: Floor8th
  },
  { 
    path: '/9th-floor',
     name: '9thFloor',
   component: Floor9th
  },
  { 
    path: '/10th-floor',
     name: '10thFloor',
   component: Floor10th
  },
  { 
    path: '/11th-floor',
     name: '11thFloor',
   component: Floor11th
  },
  {
    path: '/floor-select',
    name: 'FloorSelect',
    component: FloorSelect
  },
  {
    path: '/class-info/:subject',
    name: 'ClassInfo',
    component: ClassInfo,
    props: route => ({ id: route.params.id, classData: JSON.parse(route.query.classData) }),
  },
  {
    path: '/search-class',
    name: 'SearchClass',
    component: SearchClass,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
