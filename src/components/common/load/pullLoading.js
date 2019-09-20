import _component from '@/tools/createComponent';
//下拉加载
const pullLoading = _component('pull-loading', {
  render: function (c) {
    return c('img', {
      attrs: {
        src: this.imgUrl,
      },
      class:{
        pullDefault:true,
        pullShow:this.control,
      },
    })
  },
  props: {
    imgUrl: {
      type: String,
      default: require('../image/icon/20130527034916454.gif'),
    },
    open: {
      type: Boolean,
      default: false,
    }
  },
  watch:{
    open:function (newVal) {
      this.control = newVal
    }
  },
  data:function () {
    return{
      control:false,
    }
  }
})

export default pullLoading
