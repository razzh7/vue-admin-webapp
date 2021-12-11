import Layout from '@/layout'

export const asyncRoutes = [
  {
    path: '/table',
    component: Layout,
    children: [
      {
        path: 'ratable',
        name: 'Table',
        component: () => import('@/views/table'),
        meta: { title: '表格', icon: 'el-icon-s-promotion', roles: ['admin'] }
      }
    ]
  },
]