import Vue from 'vue'
import * as filters from '../commonFuns/filters'

//施加全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
