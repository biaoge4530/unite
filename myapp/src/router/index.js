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
import Hot from '@/components/word-mdn/components-head/hot'
import Notebook from '@/components/word-mdn/components-head/notebook'
import Release_dynamics from '@/components/release_dynamics'
import Select_place from '@/components/select_place'
import Select_public from '@/components/select_public'
import Notify from "../components/my/settings/notify"
import AccountManagement from "../components/my/settings/accountManagement"
import ClearCache from "../components/my/settings/clearCache"
import MaterialSubmitted from "../components/my/settings/materialSubmitted"
import AboutUs from "../components/my/settings/aboutUs"
import Settings from "../components/my/settings"
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path:"/",
      redirect:"/word"
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
		{
			path: "/release_dynamics",
			name:"release_dynamics",
			component: Release_dynamics,
			meta:{
				showFooter:false
			}
		},
		{
			path: "/select_place",
			name:"select_place",
			component: Select_place,
			meta:{
				showFooter:false
			}
		},
		{
			path:"/select_public",
			name:"select_public",
			component:Select_public,
			meta:{
				showFooter:false
			}
		},
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        //tab栏隐藏
        showFooter: false,
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
        showFooter: false,
        //路由守卫
        requireAuth:true
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
      path: '/notify',
      name: 'notify',
      component: Notify,
      meta:{
        //tab栏隐藏
        showFooter: false,
        //路由守卫
        requireAuth:true
      }
    },
    {
      path: '/clearCache',
      name: 'clearCache',
      component: ClearCache,
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
  ]
})


export default router;
