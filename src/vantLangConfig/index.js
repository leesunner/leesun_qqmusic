import Vue from 'vue';
//vant 语言的配置
import { Locale } from 'vant'
//中文
// import enUS from 'vant/lib/locale/lang/en-US';
// Locale.use('en-US', enUS);
//自定义拓展vant语言
const messages = {
  'zh-CN': {
    // vanPicker: {
    //   confirm: '关闭' // 将'确认'修改为'关闭'
    // }
  }
};
Locale.add(messages);
