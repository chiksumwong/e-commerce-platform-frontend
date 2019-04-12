import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

Vue.config.productionTip = false

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
