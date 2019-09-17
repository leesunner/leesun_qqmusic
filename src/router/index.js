import Vue from 'vue'
import Router from 'vue-router'
import lazyComponent from './async.js'
const Home = ()=>lazyComponent(import('@/pages/Home'))
const Mine = ()=>lazyComponent(import('@/pages/mine/Mine'))
const MusicHouse = ()=>lazyComponent(import('@/pages/musicHouse/index'))
const Find = ()=>lazyComponent(import('@/pages/find/index'))
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Home,
      redirect:'/mine',
      children:[
        {
          path: '/mine',
          name: 'mine',
          component: Mine
        },
        {
          path: '/musicHouse',
          name: 'musicHouse',
          component: MusicHouse
        },
        {
          path: '/find',
          name: 'find',
          component: Find
        }
      ]
    },
  ]
})
