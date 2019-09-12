const mixin = {
  data:function () {
    return{
      _data:{},//承接接口响应数据源
      _pageNum:1,//分页加载默认页码数
      _pageSize:10,//分页加载默认每页数量
    }
  }
}

export default mixin
