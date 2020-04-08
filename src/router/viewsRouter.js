const viewcomponets = [{
  path:'/home',
  name:'home',
  component:()=>import('@/layout'),
  children:[{
    path:'/loginuser',
    name:'loginuser',
    component:()=>import('@/views/loginUser/index'),
  },
  ]
}]

export default viewcomponets
