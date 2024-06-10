import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/students',
    name: 'StudentList',
    component: () => import('../views/students/StudentList.vue')
  },
  {
    path: '/students/:id',
    name: 'StudentDetails',
    component: () => import('../views/students/StudentDetails.vue')
  },
  {
    path: '/students/create',
    name: 'StudentCreate',
    component: () => import('../views/students/StudentCreate.vue')
  },
  {
    path: '/students/:id/edit',
    name: 'StudentEdit',
    component: () => import('../views/students/StudentEdit.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
