// import CryptoJS from 'crypto-js';
// 公用方法管理
export default {
  /**
   * 清空对象的所有属性的值
   */
  emptyObj(obj) {
    if (typeof (obj) == 'object') {
      for (let key of Object.keys(obj)) {
        if(obj[key]!=null&&obj[key].constructor == Array ){
          obj[key] = []
        }else{
          obj[key] = ''
        }
      }
      return obj;
    }
  },
  /**
   * 设置本地存储
   */
  setS(k, v, t) {
    if (typeof v == "object") {
      v = JSON.stringify(v);
    }
    if (t == 'session') {
      window.sessionStorage.setItem(k, v);
    } else {
      window.localStorage.setItem(k, v);
    }
  },
  /**
   * 获取本地存储
   */
  getS(k, t) {
    let val;
    if (t == 'session') {
      val = window.sessionStorage.getItem(k);
    } else {
      val = window.localStorage.getItem(k);
    }
    if (val == null || val.length < 1) {
      return val;
    }
    let valPrefix = val.substring(0, 1);
    let valSubfix = val.substr(val.length - 1);
    // 判断是否为对象，是对象就转json
    if (
      (valPrefix == "[" && valSubfix == "]") ||
      valPrefix == "{" ||
      valSubfix == "}"
    )
      return JSON.parse(val);
    return val;
  },
  /**
   * 删除本地存储
   */
  delS(k, t) {
    if (t == 'session') {
      window.sessionStorage.removeItem(k);
    } else {
      window.localStorage.removeItem(k);
    }
  },

  /**
   * 金额转换：分---元
   */
  minuteFormat(value) {
    let m = value / 100;
    return "￥" + m;
  },
  /**
   * 限制输入整型数字
   * */
  paseIntValue(val) {
    if (val) {
      return val.toString().replace(/[^\d]/g, "");
    } else {
      return ''
    }
  },
  /**
   * 检出字典对应值
   */
  formatSelectValue(val, arr) {
    let value = ""
    if (val === undefined) return
    for (let item of arr) {
      if (item.key == val) {
        value = item.value
        break;
      }
    }
    return value
  },
  /**
   * 验证手机号
   */
  checkPhone(value){
    const test = /^1[3|4|5|7|8|9]\d{9}$/g
    return test.test(value)
  },
  /**
   * 验证邮箱
   */
  checkEmail(value){
    const test = /^\w+@[A-Za-z\d]+(.){1}([A-Za-z]{2,})$/g
    return test.test(value)
  },
  /**
   * 加密密码
   */
  // Encrypt(val) {
  //   const key = '201991022019sqzn';
  //   const piv = 1234567876543210;
  //   const message = CryptoJS.enc.Utf8.parse(val);
  //   const secret_key = CryptoJS.enc.Utf8.parse(key);//key
  //   const iv = CryptoJS.enc.Utf8.parse(piv);//偏移
  //   // Encrypt
  //   const ciphertext = CryptoJS.AES.encrypt(message, secret_key, {
  //     iv: iv,
  //     mode: CryptoJS.mode.CBC,
  //     padding: CryptoJS.pad.Pkcs7
  //   });
  //   return CryptoJS.enc.Base64.stringify(ciphertext.ciphertext)
  // },
  /**
   * 深拷贝对象
   *
   */
  copyObject(obj) {
    let newObj, ISEMPTY;
    if (!(obj === null || obj === undefined || obj === '' || obj === NaN)){
      if (obj.constructor === Array) {
        newObj = []
        ISEMPTY = obj.length <= 0;
      } else if (obj.constructor === Object) {
        newObj = {}
        ISEMPTY = Object.keys(obj).length <= 0 || JSON.stringify(obj) == '{}';
      } else {
        ISEMPTY = true
      }
    }else{
      ISEMPTY = true
    }
    if (ISEMPTY) return obj;
    for (let name in obj) {
      if (obj[name] === undefined || obj[name] === null || obj[name] === NaN) {
        newObj[name] = '';
      }else{
        if (obj[name].constructor === Array || obj[name].constructor === Object) {
          newObj[name] = this.copyObject(obj[name]);
        }else{
          newObj[name] = obj[name];
        }
      }
    }
    return newObj
  },
}
