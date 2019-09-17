import Vue from 'vue';
/**
 * @param name:组件名, obj:vue组件数据源
 * @author leesun
 * @description 用来创建Vue组件的公共函数
 */
const _component = function (name='',obj={}) {
  return Vue.component(name, obj)
}
export default _component
