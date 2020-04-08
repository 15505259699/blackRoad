import Vue from 'vue'
import Router from 'vue-router'
import  viewcomponets from './viewsRouter'
Vue.use(Router)

export const  constantRoutes = [
    {
      path: '/',
      name: 'login',
      component: ()=>import('@/views/login/index')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('@/views/register/index')
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: ()=>import('@/views/forgotPwd/index')
    },
  {
    path:'/home',
    name:'home',
    component:()=>import('@/layout'),
    children:[{
      path:'/',
      name:'loginuser',
      component:()=>import('@/views/loginUser/index'),
    },
      {
        path:'/startEvent',
        name:'startevent',
        component:()=>import('@/views/events/start/index'),
      },
      {
        path:'/finishEvent',
        name:'finishevent',
        component:()=>import('@/views/events/finish/index'),
      },{
        path:'/userList',
        name:"userList",
        component:()=>import('@/views/user/index')
      }
    ]
  },
]

export const asyncRoutes = []
const createRouter = () => new Router({
  routes: constantRoutes
})

const router = createRouter()
export default router
