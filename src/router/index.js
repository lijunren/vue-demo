import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import Index from '@/components/main/index'
import Home from '@/components/main/home'
import Discover from '@/components/main/discoverRegular'
import Order from '@/components/main/orderRegular'
import Profile from '@/components/main/profileRegular'
import Search from '@/components/search/search'
// import Login from '@/components/login/login'
import login from './login.js'
Vue.use(Router)

export default new Router({
  routerLinkExactActive: 'index-footer-active',
  linkActiveClass: 'index-footer-active',
  routes: [
    {
      path: '/',
      component: App,
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: Index,
          redirect: '/index/home',
          children: [
            {
              path: 'home',
              name: 'home',
              component: Home
            },
            {
              path: 'discoverRegular',
              name: 'discoverRegular',
              component: Discover
            },
            {
              path: 'orderRegular',
              name: 'orderRegular',
              component: Order
            },
            {
              path: 'profileRegular',
              name: 'ProfileRegular',
              component: Profile
            }
          ]
        },
        {
          path: 'search',
          component: Search
        },
        ...login
      ]
    }
  ]
})
