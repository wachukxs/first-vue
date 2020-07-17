import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import Index from '@/components/Index'
import SellerLogin from '@/components/SellerLogin'
import SellerSignUp from '@/components/SellerSignUp'
import SellerDashboard from '@/components/SellerDashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/first',
      name: 'First',
      component: First,
      meta: {
        title: 'Welcome - Jiji Clone'
      }
    },
    {
        path: '/',
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
    },
    {
        path: '/seller-signup',
        name: 'SellerSignUp',
        component: SellerSignUp,
        meta: {
          title: 'Welcome again, signup - Sellers - Jiji Clone'
        }
    },
    {
        path: '/seller-dashboard',
        name: 'SellerDashboard',
        component: SellerDashboard,
        meta: {
          title: 'Welcome again, dashboard - Sellers - Jiji Clone'
        }
    }
  ]
})
