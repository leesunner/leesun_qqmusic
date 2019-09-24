import Router from './index'

Router.beforeEach((to,from,next)=>{
  //这里对全局路由做过滤拦截
  next()
})
