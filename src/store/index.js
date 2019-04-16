import Vue from 'vue'
import Vuex from 'vuex'

import { users } from '@/store/modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
      users
  }
})
