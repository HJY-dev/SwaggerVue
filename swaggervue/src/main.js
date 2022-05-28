import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var managebibiApi = require('./api/managebibi.js')
//通用api访问
window.ManagebibiApi = managebibiApi

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
