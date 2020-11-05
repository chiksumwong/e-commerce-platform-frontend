import Vue from "vue";
import { store } from "@/store";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use(
  config => {
    let token = store.state.account.t;
    if (token) {
      const authToken = "Bearer " + token;
      config.headers["Authorization"] = authToken;
    }
    return config;
  },
  error => {
    // return error;
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    //handle 401 (user login fail, user token expire)
    // if (error.response.status === 401) {
    //   // refresh token
    //   const refresh_token = store.state.account.r;
    //   if (refresh_token != null) {
    //     const originalRequest = error.config;
    //     return axios
    //       .post(process.env.VUE_APP_BASE_API + "token/refresh/", {
    //         refresh: refresh_token
    //       })
    //       .then(response => {
    //         store.dispatch("account/setToken", {
    //           access_token: response.data.access
    //         });

    //         originalRequest.headers["Authorization"] =
    //           "Bearer " + response.data.access;

    //         return instance(originalRequest);
    //       })
    //       .catch(() => {
    //         store.dispatch("account/logoutAction");
    //       });
    //   }
    // }

    //handle 401
    if (error.response.status === 401) {
      if (error.response.data.code === "token_not_valid") {
        store.dispatch("account/logoutAction");
      } else if (error.response.data.code === "user_inactive") {
        store.dispatch("account/logoutAction");
      }
    }

    return error;
    // return Promise.reject(error);
  }
);

Vue.prototype.$axios = instance;
