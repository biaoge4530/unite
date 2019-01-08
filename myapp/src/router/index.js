import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Word from '@/components/word'
import My from '@/components/my'
import Edit_btn from '@/components/edit_btn'
import Edit_home from '@/components/edit_home'

import WordMdn from '@/components/word-mdn/headphoto'
import Hot from '@/components/word-mdn/components-head/hot'
import Notebook from '@/components/word-mdn/components-head/notebook'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "home",
      component: Home,
      meta:{
      	showFooter: true
      }
    },
    {
      path: '/word',
      name: "word",
      component: Word,
      meta:{
      	showFooter: true
      }
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
      name: "my",
      component: My,
      meta:{
      	showFooter: true
      }
    },
    {
      path: '/edit_btn',
      name: "edit_btn",
      component: Edit_btn,
      meta:{
      	showFooter: false
      }
    },
    {
      path: '/edit_home',
      name: "edit_home",
      component: Edit_home,
      meta:{
      	showFooter: false
      }
    },
  ]
})
