import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Word from '@/components/word'
import My from '@/components/my'
import WordMdn from '@/components/word-mdn/headphoto'
import Fans from '@/components/word-mdn/components-head/fans'
import Like from '@/components/word-mdn/components-head/like'
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
      children:
        [
          {
            path: '/like',
            name: 'like',
            component: Like
          },
          {
            path: '/fans',
            name: 'fans',
            component: Fans
          }
        ]
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
  ]
})
