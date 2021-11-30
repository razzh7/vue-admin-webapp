import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'
// 通用路由
export const commonRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: { title: '登录页'},
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: '首页' }
      }
    ]
  }
]

const createRouter = () => {
  return new Router({
    routes: commonRoutes,
    mode: 'history'
  })
}
const router = createRouter();

export default router
