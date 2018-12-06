import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import register from '@/components/register'
import Private from '../components/private.vue'
import Addcustomers from '../components/Addcustomers.vue'
import warehouses from '../components/warehouses.vue'
import Outof from '../components/Outof.vue'
import Warehousing from '../components/Warehousing.vue'
import lease from '../components/lease.vue'
import sale from '../components/sale.vue'
import history from '../components/history.vue'
import jointH from '../components/jointH.vue'
import qxgl from '../components/qxgl.vue'
import glylb from '../components/glylb.vue'
import jbsz from '../components/jbsz.vue'
import stus from '../components/stus.vue'
import add from '../components/add.vue'
import lyslb from '../components/lyslb.vue'
import tjlys from '../components/tjlys.vue'
import cwgl from '../components/cwgl.vue'
import cwxq from '../components/cwxq.vue'
import mslb from '../components/mslb.vue'
import qxlb from '../components/qxlb.vue'
import dslb from '../components/dslb.vue'

Vue.use(Router)
const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      component:home,
      children:[
        {
          path:'/private',
          component:Private
        },{
          path:'/Addcustomers',
          component:Addcustomers
        },{
          path:'/warehouses',
          component:warehouses
        },{
          path:'/Outof',
          component:Outof
        },{
          path:'/Warehousing',
          component:Warehousing
        },{
          path:'/lease',
          component:lease
        },{
          path:'/sale',
          component:sale
        },{
          path:'/history',
          component:history
        },{
          path:'/jointH',
          component:jointH
        },{
          path:'/qxgl',
          component:qxgl
        },{
          path:'/glylb',
          component:glylb
        },{
          path:'/jbsz',
          component:jbsz
        },{
          path:'/stus',
          component:stus
        },{
          path:'/add',
          component:add
        },{
          path:'/lyslb',
          component:lyslb
        },{
          path:'/tjlys',
          component:tjlys
        },{
          path:'/cwgl',
          component:cwgl
        },{
          path:'/',
          component:cwxq
        },
        {
          path:'/mslb',
          component:mslb
        },{
          path:'/qxlb',
          component:qxlb
        },{
          path:'/dslb',
          component:dslb
        }
      ]
    },
    {
      path: '/login',
      component:login
    },
    {
      path: '/register',
      component:register
    },
    {
      path: '**',
      redirect: '/'
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if (to.path=='/') {
    if (localStorage.getItem('token')) {
      next()
    }else{
      next({path:'/login'})
    }
  } else {
    next()
  }
})
export default router
