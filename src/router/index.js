import Vue from 'vue'
import Router from 'vue-router'
// import { asyncRoutes } from "./modules/routes" // 动态路由必须导入
Vue.use(Router)
import Layout from '@/layout'

/* 通用路由 */
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
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: '首页', icon: 'el-icon-s-home' }
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
        meta: { title: '测试1', icon: 'el-icon-s-promotion' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    meta: { title: '多级菜单测试', icon: 'el-icon-s-claim' },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        component: () => import('@/views/nested/menu1'),
        meta: { title: 'Menu1', icon: 'el-icon-s-marketing' },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            meta: { title: 'Menu1-1', icon: 'el-icon-s-flag' }          
          },
          {
            path: 'menu1-2',
            name: 'Menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            meta: { title: 'Menu1-2', icon: 'el-icon-s-order' }           
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('@/views/nested/menu2'),
        meta: { title: 'Menu2', icon: 'el-icon-s-ticket' }
      }
    ]
  },
  {
    path: '/github', // path中不加/相当于父组件路径/https://github.com/rzhAvenir
    component: Layout,
    children: [
      {
        path: 'https://github.com/rzhAvenir',
        meta: { title: 'Github', icon: 'el-icon-info' }
      }
    ]
  }
]
export const asyncRoutes = [
  {
    path: '/table',
    component: Layout,
    children: [
      {
        path: 'ratable',
        name: 'Table',
        component: () => import('@/views/table'),
        meta: { title: '表格', icon: 'el-icon-s-grid', roles: ['admin'] }
      }
    ]
  },
]

const createRouter = () => {
  return new Router({
    routes: commonRoutes
  })
}
const router = createRouter()

// fix:用户切换菜单栏不变的问题： https://github.com/vuejs/vue-router/issues/1234
export function resetRouter() {
  console.log('执行了吗')
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // the relevant part
}

export default router
