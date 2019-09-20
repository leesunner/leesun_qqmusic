import Icon from './icon/icon'
// import Image from './image/le-image'
import loadMore from './load/loadMore/loadMore'
import TransitionScale from './scale/scale'
const arr = [Icon,loadMore,TransitionScale]

arr.forEach(item=>{
  item.install=function(Vue){
    Vue.component(item.name,item) //组件名称取组件的name
  }
})
export default arr  //导出组件
