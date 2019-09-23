import Vue from 'vue'
import Router from 'vue-router'
import Links from './routerLink'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Links.Home,
      meta:{
        child:false,
      },
      children:[
        {
          path: '/localMusic',
          name: 'localMusic',
          component: Links.LocalMusic,
          meta:{
            child:true,
          }
        }
      ]
    },
  ]
})
