import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import Index from '@/components/Index'
import SellerLogin from '@/components/SellerLogin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'First',
      component: First,
      meta: {
        title: 'Welcome - Jiji Clone'
      }
    },
    {
        path: '/index',
        name: 'Index',
        component: Index,
        meta: {
          title: 'Welcome again - Jiji Clone'
        }
    },
    {
        path: '/seller-login',
        name: 'SellerLogin',
        component: SellerLogin,
        meta: {
          title: 'Welcome again, login - Sellers - Jiji Clone'
        }
    }
  ]
})
