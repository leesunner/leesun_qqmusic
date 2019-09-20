//导入自定义组件
import _components from '../components/common/index'
//自定义组件注册主出口
import Vue from 'vue'
_components.forEach(item=>{
  Vue.use(item)
})
