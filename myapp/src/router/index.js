import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Word from '@/components/word'
import My from '@/components/my'
import WordMdn from '@/components/word-mdn/headphoto'
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
      path: '/word-mdn',
      name: 'word-mdn',
      component: WordMdn,
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
  ]
})
