import Vue from 'vue'
import AuthGuard from './auth-guard'
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
import Main from "../components/Main";


// Vue.use(VueRouter)
Vue.use(Router)


const router =  new Router({
  routes: [{
      path: '/',
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
      component: AdList,
      // This is written so that the buttons are not shown if you are not registered
      beforeEnter: AuthGuard
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd,
      // This is written so that the buttons are not shown if you are not registered
      beforeEnter: AuthGuard
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      // if not registered you cannot open this page
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      // This is written so that the buttons are not shown if you are not registered
      beforeEnter: AuthGuard
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
    },
    {
      path: '/main',
      name: 'main',
      component: Main
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