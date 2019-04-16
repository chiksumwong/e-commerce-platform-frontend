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
import VueAxios from 'vue-axios'
import '@/helper/axios_setting'
Vue.use(VueAxios, axios)

// Notification
import Notifications from 'vue-notification'
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
