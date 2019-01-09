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
  ]
})


export default router;
