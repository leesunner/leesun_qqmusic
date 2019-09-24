import loading from '../components/common/loading'
import failed from '../components/common/failed'
//异步加载组件优化函数
export  default (c) =>{
  return ()=>({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: c,
    // 异步组件加载时使用的组件
    loading: loading,
    // 加载失败时使用的组件
    error:failed,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 300,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 1000
  })
}


