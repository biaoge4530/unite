import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Word from '@/components/word'
import My from '@/components/my'
import WordMdn from '@/components/word-mdn/headphoto'
import Hot from '@/components/word-mdn/components-head/hot'
import Notebook from '@/components/word-mdn/components-head/notebook'
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
       children:[
         {
           path:'/hot',
           name:'hot',
           component:Hot
         },
         {
            path:'notebook',
            name:'notebook',
            component:Notebook
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
