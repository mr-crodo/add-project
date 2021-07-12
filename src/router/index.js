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
import Main from "@/components/Main";
import Chats from "@/components/Messenger/Chats";
import Chat from "../components/Messenger/Chat";
// import Video from "../components/Messenger/Video";
import Profile from "@/components/Auth/Profile";
import Video from "@/views/Video";
import Rooms from "@/views/Rooms";
import VideoChat from "@/views/Rooms";
import CheckIn from "@/views/CheckIn";
import Contact from "@/components/Contacts/Contact";



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
    },
    {
      path: '/chats',
      name: 'chats',
      component: Chats
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms
    },
    {
      path: '/checkin',
      name: 'checkin',
      component: CheckIn
    },
    {
      path: '/videochat',
      name: 'videochat',
      component: VideoChat
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
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