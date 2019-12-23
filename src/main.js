import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'

Vue.use(ElementUI)
// 日志的详细与否，生产环境  开发环境
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// main.js 入口文件
// 职责：做全局范围内的依赖和配置
// 职责：创建一个根VUE实例
