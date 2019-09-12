module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    //启用下面的vw处理方案请屏蔽该项
    "autoprefixer": {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {//px自动转rem插件
      rootValue: 75,
      propList: ['*'],
      // minPixelValue: 0
    }
    //启用下面的vw处理方案
    // "postcss-aspect-ratio-mini": {},//用来处理元素容器宽高比
    // "postcss-write-svg": { //主要用来处理移动端1px的解决方案
    //   utf8: false
    // },
    // "postcss-cssnext": {},
    // "postcss-px-to-viewport": {//用来把px单位转换为vw、vh、vmin或者vmax这样的视窗单位，也是vw适配方案的核心插件之一
    //   //视觉稿为750px的方案(在不想要把px转换为vw的时候，首先在对应的元素（html）中添加配置中指定的类名.ignore或.hairlines(.hairlines一般用于设置border-width:0.5px的元素中)：)
    //   viewportWidth: 750,     // (Number) The width of the viewport.
    //   viewportHeight: 1334,    // (Number) The height of the viewport.
    //   unitPrecision: 3,       // (Number) The decimal numbers to allow the REM units to grow to.
    //   viewportUnit: 'vw',     // (String) Expected units.
    //   selectorBlackList: ['.ignore', '.hairlines'],  // (Array) The selectors to ignore and leave as px.
    //   minPixelValue: 1,       // (Number) Set the minimum pixel value to replace.
    //   mediaQuery: false       // (Boolean) Allow px to be converted in media queries.
    // },
    // "postcss-viewport-units":{},
    // "cssnano": {
    //   preset: "advanced",
    //   autoprefixer: false,//防止CSS处理前端重复添加
    //   "postcss-zindex": false//阻止启用该插件后设置Z-index=1
    // }
  }
}
