<template>
  <div class="font-icon" :style="style">
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
          "line-height":`${this.size}rem`,
        },
        fontSize:`${this.size}rem`
      }
    }
  }
</script>

<style scoped>
.font-icon{
  display: inline-block;
  text-align: center;
  color: #2caf6f;
}
</style>
