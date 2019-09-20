import _component from '@/tools/createComponent';

const wh = window.innerHeight
const ww = window.innerWidth
export default _component('transition-scale', {
  functional: true,
  render: function (c, context) {
    const data = {
      props: {
        name: 'lee-scale',
        mode: 'in-out',
      },
      on: {
        enter: (el, done) => {
          Velocity(el, {
            width: ww,
            height: wh,
            scaleX: 1,
            scaleY: 1,
            translateY: 0,
            translateX: 0,
            opacity: 1,
            bottom:0,
            left:0,
          }, {duration: 250,complete: done})
        },
        leave: (el, done) => {
          Velocity(el, {
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            scaleX: 1,
            scaleY: 1,
          }, {duration: 50})
          Velocity(el, {
            scaleX: 2,
            scaleY: 2,
          }, {duration: 210})
          Velocity(el, {
            scaleX: 0,
            scaleY: 0,
            opacity: 0,
            translateY: `${wh * 2}px`,
            translateX: `${-ww * 2 + 50}px`,
          }, {duration: 350})
          Velocity(el, {
            width: 0,
            height: 0,
            bottom:`${-wh/2}px`,
            left:`${-ww/2}px`,
            borderRadius: 'none'
          }, {complete: done})
        },
      },
    }
    return c('transition', data, context.children)
  },

})
