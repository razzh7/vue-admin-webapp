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
  },
  {
    path: '/test',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Test',
        component: () => import('@/views/routertest'),
        meta: { title: '测试1'}
      }
    ]
  },
  {
    path: '/test2',
    component: Layout,
    children: [
      {
        path: 't2',
        name: 'Test',
        component: () => import('@/views/test2'),
        meta: { title: '测试2'}
      }
    ]
  },
  {
    path: 'Github', // path中不加/相当于父组件路径/https://github.com/rzhAvenir
    component: Layout,
    children: [
      {
        path: 'https://github.com/rzhAvenir',
        meta: { title: 'Github' }
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
