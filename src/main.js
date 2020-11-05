import Vue from 'vue'
import App from './App.vue'
import { i18n } from "./i18n";
import { router } from './router'
import { store } from './store';

//API
import "./api";

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// Axios
import axios from 'axios'
const instance  = axios.create({
  // baseURL: (process.env.VUE_APP_BASE_URL !== undefined) ? process.env.VUE_APP_BASE_URL : 'http://localhost:3000/api/v1/'
  baseURL: process.env.VUE_APP_BASE_API,
})
instance.interceptors.request.use(
 (config) => {
   let token = localStorage.getItem('token');

   if (token) {
     const authToken = 'Bearer ' + token
     config.headers['Authorization'] = authToken
   }

   return config
 },
 (error) => {
   return Promise.reject(error)
 }
)
Vue.prototype.$axios = instance ;

// Notification
import CripNotice from 'crip-vue-notice'
Vue.use(CripNotice)

//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

//vue-json-excel
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

// Vue
Vue.config.productionTip = false
new Vue({
  i18n,
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
