import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from '@/store/modules/user'
import cart from '@/store/modules/cart'
import payment from '@/store/modules/payment'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
      user,
      cart,
      payment
  },
  plugins: [createPersistedState()]
})
