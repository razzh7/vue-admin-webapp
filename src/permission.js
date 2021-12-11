import router from "@/router"
import store from "@/store"
import { getToken } from "@/utils/auth"
router.beforeEach(async (to, from, next) => {

  if (to.path === '/login') {
    next()
  } else {
    const hasToken = getToken()
    if (hasToken) {
      const hasRoles = store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
            const { roles } = await store.dispatch('user/_userInfo', localStorage.getItem('token'))   
            const accessRoutes = await store.dispatch('permission/generatorRoutes', roles)
            for(let i = 0; i < accessRoutes.length; i++) {
              let element = accessRoutes[i]
              router.addRoute(element)
            }

            next({ ...to, replace: true })
        } catch(error) {
          console.log(error)
        }
        }
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
})