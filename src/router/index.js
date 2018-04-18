import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Discover from '@/components/discoverRegular'
import Order from '@/components/orderRegular'
import Profile from '@/components/profileRegular'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/discoverRegular',
      name: 'discoverRegular',
      component: Discover
    },
    {
      path: '/orderRegular',
      name: 'orderRegular',
      component: Order
    },
    {
      path: '/profileRegular',
      name: 'ProfileRegular',
      component: Profile
    }
  ],
  routerLinkExactActive: 'index-footer-active',
  linkActiveClass: 'index-footer-active'
})
