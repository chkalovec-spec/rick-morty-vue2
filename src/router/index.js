import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Characters from '@/views/Characters.vue'
import Episodes from '@/views/Episodes.vue'
import Locations from '@/views/Locations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes,
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
