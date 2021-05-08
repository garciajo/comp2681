/*********************************************************
*   Final Project: Vaccine Recording System
*   Purpose: Vue JS Router. Router used to build the Single Page Application functionality
*   Author: Jose Garcia
*   Date: May 2021
*   Filename: index.ts
*   Email: <garciaalfonzoj18@mytru.ca>
*   2021 Jose Garcia. Ottawa, Ontario.
**********************************************************/
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculate',
    name: 'Calculate',
    component: () => import('../views/Calculate.vue')
  },
  {
    path: '/record',
    name: 'Record',
    component: () => import('../views/Record.vue')
  },
  {
    path: '/sitemap',
    name: 'SiteMap',
    component: () => import('../views/SiteMap.vue')
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('../views/Links.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue')
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
