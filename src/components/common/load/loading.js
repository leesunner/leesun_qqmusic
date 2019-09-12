// 整体遮罩
const loading = {
  config: {
    _ele: null,
    imgUrl:require('../image/icon/20130527034916434.gif'),
    backGround: 'rgb(0,0,0,0.6)',
  },
  open: function () {
    const that = this
    const ele = document.getElementById('leesun-loading')
    if (!ele) {
      const h = window.innerHeight
      const load = document.createElement('div')
      load.id = 'leesun-loading'
      load.innerHTML = `<img style="margin: 300px auto;display: block;" src="${this.config.imgUrl}"/>`
      style(load)
      document.querySelector('body').appendChild(load)
      this.config._ele = load
    } else {
      this.config._ele.style.display = 'block'
    }
    function style(load) {
      load.style.position = 'absolute';
      load.style.top = '0';
      load.style.left = '0';
      load.style.width = '100%';
      load.style.height = '100%';
      load.style.backgroundColor = that.config.backGround;
      load.style.color = '#ffffff';
      load.style.zIndex = '2999';
    }
  },
  close: function () {
    console.log(this)
    this.config._ele.style.display = 'none'
  },
  create: function (obj) {
    if(!obj) return
    this.config.backGround = obj.backGround
    this.config.imgUrl = obj.imgSrc
    this.open()
  }
}

export default loading
