import Vue from 'vue'
// import VueRouter from 'vue-router'
import Router from "vue-router";
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import AdList from '@/components/Ads/AdList'
import NewAd from '@/components/Ads/NewAd'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'
import Avatar from '@/components/Auth/Avatar'
import User from '@/components/Auth/User'
import Nav from '@/components/Nav'


// Vue.use(VueRouter)
Vue.use(Router)


const router =  new Router({
  routes: [{
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      name: 'ad',
      props: true,
      component: Ad
    },
    {
      path: '/list',
      name: 'list',
      component: AdList
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: Avatar
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    }
  ],
  mode: 'history',
  base: process.env.BASE_URL
})

export default router

// router.beforeEach((to, from, next) => {
//   const authenticatedUser = null;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//
//   if(requiresAuth && ! authenticatedUser) next('login')
//   else next()
// })