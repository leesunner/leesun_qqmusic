import axios from 'axios'
import loading from '../components/common/load/loading';
const url = ''
axios.create({
  baseURL: url,
  timeout: 10000,
})

//添加请求拦截
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //必须设置token，参数统一加密,设置请求加载弹框遮罩等
  // loading.open()
  return config
}, function (error) {
  console.log(error)
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
  // 对响应数据做点什么
  //比如使用状态码给出响应提示
  if (res.status == 200) {
    return res.data
  } else {
    return res.data.msg
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axios
