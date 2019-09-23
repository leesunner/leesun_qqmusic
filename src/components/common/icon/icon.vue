<template>
  <div class="font-icon" :style="style" @click="lisClick">
    <slot></slot>
    <i :class="['iconfont',icon]" :style="`font-size: ${fontSize}!important;color:${fontColor};`"></i>
  </div>
</template>

<script>
  export default {
    name: "icon",
    props: {
      icon: {
        type: String,
        default: '',
      },
      size:{
        type:Number,
        default:0.5,
      },
      fontColor:{
        type:String,
        default:'#ffffff',
      }
    },
    data(){
      return{
        style:{
          height:`${this.size}rem`,
          width:`${this.size}rem`,
        },
        fontSize:`${this.size}rem`
      }
    },
    methods:{
      lisClick(){
        const ls = this.$listeners
        if(ls.click){
          this.$listeners.click()
        }
      },
    }
  }
</script>

<style scoped>
.font-icon{
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  position: relative;
}
</style>
