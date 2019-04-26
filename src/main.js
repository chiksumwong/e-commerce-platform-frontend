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
import Notifications from 'vue-notification'
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
