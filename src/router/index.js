import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 通用路由
export const commonRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: { title: '登录页'},
    hidden: true
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
