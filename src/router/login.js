import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import PassLogin from '@/components/login/passLogin'
import MessageLogin from '@/components/login/messageLogin'
Vue.use(Router)

export default [
  {
    path: '/login',
    component: Login,
    redirect: '/login/passin',
    children: [
      {
        path: 'passin',
        component: PassLogin
      },
      {
        path: 'messagein',
        component: MessageLogin
      }
    ]
  }
]
