router.beforeEach((to,from,next)=>{
  if("token"){
      next({
    path:"/login",
    query:{}
  })
}else {
  next()
}

})
