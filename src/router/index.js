import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/components/404'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/planets/page=1' },
  {
    path: '/planets/page=:id',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  },
  { path: '/planets', redirect: '/planets/page=1' },
  { path: '*', component: NotFound }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
