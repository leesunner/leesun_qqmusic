import Vue from 'vue'
import Router from 'vue-router'
import lazyComponent from './async.js'
const Home = ()=>lazyComponent(import('@/pages/Home'))
const Mine = ()=>lazyComponent(import('@/pages/mine/Mine'))
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
