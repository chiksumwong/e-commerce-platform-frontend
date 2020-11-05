import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate";

// import SecureLS from "secure-ls";
// const ls = new SecureLS({
//   encodingType: "des",
//   isCompression: true,
//   encryptionSecret: process.env.VUE_APP_SECRET_KEY
// });

// import Cookies from "js-cookie";

import system from "@/store/modules/system";
import account from "@/store/modules/account";

export const store = new Vuex.Store({
  modules: {
    system,
    account
  },
  plugins: [
    createPersistedState({
      key: "D_S"
    })

    // createPersistedState({
    //   key: "D_S",
    //   storage: {
    //     getItem: key => ls.get(key),
    //     setItem: (key, value) => ls.set(key, value),
    //     removeItem: key => ls.remove(key)
    //   }
    // })

    // createPersistedState({
    //   key: "D_S",
    //   storage: {
    //     getItem: key => Cookies.get(key),
    //     setItem: (key, value) =>
    //       Cookies.set(key, value, { expires: 1 }, { sameSite: "strict" }),
    //     removeItem: key => Cookies.remove(key)
    //   }
    // })
  ]
});
