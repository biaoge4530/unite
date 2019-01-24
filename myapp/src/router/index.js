import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Word from '@/components/word'
import My from '@/components/my'
import Login from '@/components/login'
import Edit_btn from '@/components/edit_btn'
import Register from '@/components/register'
import Edit_home from '@/components/edit_home'
import WordMdn from '@/components/word-mdn/headphoto'
import Fans from '@/components/word-mdn/components-head/mdn-fans'
import Like from '@/components/word-mdn/components-head/like'
import Hot from '@/components/word-mdn/components-head/hot'
import Notebook from '@/components/word-mdn/components-head/notebook'
import Verify from "@/components/register/components/verify"
import RestPassword from "@/components/register/components/restPassword"
import BandPhone from "@/components/register/components/bandPhone"
import Word_search from '@/components/word_search'
import Word_notice from '@/components/word_notice'
import Collect from '@/components/collect'
import New from '@/components/collect/new'
import Attention from '@/components/word-mdn/components-head/mdn-attention'
import shared from '@/components/word-mdn/components-head/shared'
import mdn_notebookdown from '@/components/word-mdn/components-head/notebookdown'
import Release_dynamics from '@/components/release_dynamics'
import Select_place from '@/components/select_place'
import Select_public from '@/components/select_public'
import AccountManagement from "../components/my/settings/accountManagement"
import MaterialSubmitted from "../components/my/settings/materialSubmitted"
import AboutUs from "../components/my/settings/aboutUs"
import Settings from "../components/my/settings"
// import Basics from "../components/my/basics"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/word"
    },
    {
      path: '/word',
      name: "word",
      component: Word,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/word/word_search",
      name: "word_search",
      component: Word_search,
      meta: {
        showFooter: false,
      }
    },
    {
      path: "/word/word_notice",
      name: "word_notice",
      component: Word_notice,
      meta: {
        showFooter: false,
      }
    },
    {
      path: "/word/word_search",
      name: "word_search",
      component: Word_search,
      meta: {
        showFooter: false,
      }
    },
    {
      path: '/word-mdn',
      name: 'word-mdn',
      component: WordMdn,
    },
    {
      path: '/mdn-fans',
      name: 'mdn-fans',
      component: Fans
    },
    {
      path: '/mdn-attention',
      name: 'mdn-attention',
      component: Attention
    },
    {
      path: '/mdn-notebookdown',
      name: 'mdn-notebookdown',
      component: mdn_notebookdown
    },
    {
      path: '/shared',
      name: 'shared',
      component: shared
    },
    {
      path: '/my',
      name: "my",
      component: My,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/edit_btn',
      name: "edit_btn",
      component: Edit_btn,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/edit_home',
      name: "edit_home",
      component: Edit_home,
      meta: {
        showFooter: false
      }
    },
    {
      path: "/release_dynamics",
      name: "release_dynamics",
      component: Release_dynamics,
      meta: {
        showFooter: false
      }
    },
    {
      path: "/select_place",
      name: "select_place",
      component: Select_place,
      meta: {
        showFooter: false
      }
    },
    {
      path: "/select_public",
      name: "select_public",
      component: Select_public,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        //tab栏隐藏
        showFooter: false,
        //路由守卫
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        showFooter: false,
        requireAuth: true
      }
    },
    {
      path: '/verify',
      name: 'verify',
      component: Verify,
      meta: {
        showFooter: false,
        requireAuth: true
      }
    },
    {
      path: '/restPassword',
      name: 'restPassword',
      component: RestPassword,
      meta: {
        showFooter: false,
        requireAuth: true
      }
    },
    {
      path: '/bandPhone',
      name: 'bandPhone',
      component: BandPhone,
      meta: {
        showFooter: false,
        requireAuth: true
      }
    },
    {
      path: '/accountManagement',
      name: 'accountManagement',
      component: AccountManagement,
      meta:{
        //tab栏隐藏
        showFooter: false,
        //路由守卫
        requireAuth:true
      }
    },
    {
      path: '/materialSubmitted',
      name: 'materialSubmitted',
      component: MaterialSubmitted,
      meta:{
        //tab栏隐藏
        showFooter: false,
        //路由守卫
        requireAuth:true
      }
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs,
      meta:{
        //tab栏隐藏
        showFooter: false,
        //路由守卫
        requireAuth:true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta:{
        //tab栏隐藏
        showFooter: false,
        //路由守卫
        requireAuth:true
      }
    },
    // {
    //   path: '/basics',
    //   name: 'basics',
    //   component: Basics,
    //   meta:{
    //     //tab栏隐藏
    //     showFooter: false,
    //     //路由守卫
    //     requireAuth:true
    //   }
    // },
  ]
})


export default router;
