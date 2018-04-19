import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import sortlist from '../components/sortlist'
import sortclass from '../components/sortclass'
import sortdetail from '../components/sortdetail'
import cart from '../components/cart'
import login from '../components/login'
import register from '../components/register'



Vue.use(Router)

const router =  new Router({
	mode:'history',
  routes: [
    {
      path: '/home',
      component: home
    },
    {
    	path:'/sortlist',
    	component:sortlist,
    },
    {
        path:'/sortlist/:id',
        component:sortclass
    },
    {
    	path:'/detail/:id',
    	component:sortdetail
    },
    {
    	path:'/cart/:id',
    	component:cart,
    	meta: { requiresAuth: true }//需验证是否登录
    },
    {
    	path:'/login',
    	component:login
    },
    {
    	path:'/register',
    	component:register
    },
    {
    	path:'*',
    	redirect:"/home"
    }
  ]
})

router.beforeEach((to, from, next) => {
	// console.log("123");
  if (to.matched.some(record => record.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!auth.loggedIn()) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  		setTimeout(() => {
  			if(false){
  				next();
  			}else{
  				next({
  					path:"/login"
  				})
  			}
  		}, 500)
  } else {
    next() // 确保一定要调用 next()
  }

})

export default router
