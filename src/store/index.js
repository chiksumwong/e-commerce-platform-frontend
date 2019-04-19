import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from '@/store/modules/user'
import cart from '@/store/modules/cart'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
      user,
      cart
  },
  plugins: [createPersistedState()]
})
