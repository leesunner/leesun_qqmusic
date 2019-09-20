import Vue from 'vue'
import Router from 'vue-router'
import lazyComponent from './async.js'
const Home = ()=>lazyComponent(import('@/pages/Home'))
const Mine = ()=>lazyComponent(import('@/pages/mine/Mine'))
const MusicHouse = ()=>lazyComponent(import('@/pages/musicHouse/index'))
const Find = ()=>lazyComponent(import('@/pages/find/index'))
const LocalMusic= ()=>lazyComponent(import('@/pages/localMusicList'))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Home,
      meta:{
        child:false,
      },
      children:[
        {
          path: '/localMusic',
          name: 'localMusic',
          component: LocalMusic,
          meta:{
            child:true,
          }
        }
      ]
    },
  ]
})
