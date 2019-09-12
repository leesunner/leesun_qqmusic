//导入自定义组件
import _components from '../components/common/index'

import Vue from 'vue'
_components.forEach(item=>{
  Vue.use(item)
})
