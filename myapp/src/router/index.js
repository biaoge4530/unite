import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Word from '@/components/word'
import My from '@/components/my'
import Register from '../components/register'
import Login from '../components/login'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path: '/word',
      name: 'word',
      component: Word
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        //tab栏隐藏
        flag:false,
        //路由守卫
        requireAuth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        //tab栏隐藏
        flag:false,
        //路由守卫
        requireAuth:true
      }
    },
  ]
})


export default router;
