import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Word from '@/components/word'
import My from '@/components/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
  ]
})
