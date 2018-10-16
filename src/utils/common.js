import { Loading } from 'element-ui'
export default {
  install(Vue, options) {
    Vue.prototype.demo = res => {
      console.log(res)
    }
    Vue.prototype.myLoad = obj => {
      return Loading.service({
        target: document.querySelector(obj.dom),
        text: '拼命加载中...',
        customClass: 'loading-class'
      })
    }
  }
}
