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
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'
Vue.prototype.$axios = axios;

// Notification
import Notifications from 'vue-notification'
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
