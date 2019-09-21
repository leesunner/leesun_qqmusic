import Vue from 'vue'
import App from './App'
import router from './router'
import 'es6-promise/auto'
import store from './store/index'
import  FastClick  from  'fastclick'
import Vant from 'vant';
import 'vant/lib/index.css';
import './vantConfig/index'
import './diyComponents/index'
import chart from '@antv/f2'
import axios from './request/index'
import apiConfig from './request/apiConfig'
import filters from './filters/index'
import funs from './commonFuns/commonFunction'

Vue.config.productionTip = false

Vue.use(Vant);
FastClick.attach(document.body);
Vue.prototype.$axios = axios
Vue.prototype.$api = apiConfig
Vue.prototype.$F2 = chart
Vue.prototype.$funs = funs

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
