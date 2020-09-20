import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import jQuery from 'jquery'
import 'bootstrap'

Vue.config.productionTip = false
window.$ = window.jQuery = jQuery

// 套件加入到vue的藍圖內(原型)
Vue.use(VueAxios, axios)

// 使用元件全域的方式加入套件
Vue.component('Loading', Loading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
