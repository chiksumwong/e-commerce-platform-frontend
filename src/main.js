import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store';

Vue.config.productionTip = false

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

//i18n
import VueI18n from 'vue-i18n'
  //also able to get the js with API
import en from './i18n/en/lang'
import tw from './i18n/zh-TW/lang'
import cn from './i18n/zh-CN/lang'
Vue.use(VueI18n)
const locale = localStorage.getItem('locale') || 'tw'
const i18n = new VueI18n({
  locale,
  messages: { en, tw, cn }
})

//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

//vue-data-tables
import VueDataTables from 'vue-data-tables'
Vue.use(VueDataTables)

new Vue({
  i18n,
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
