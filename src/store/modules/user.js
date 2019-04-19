import UserAPI from '@/api/User'
import {router} from '@/router'
import {store} from '@/store'

export default {
    namespaced: true,
    state: {
        status:{
            isLogin:false
        },
        username:null,
        user_id:null
    },
    actions: {

        async login({ commit }, payload) {

            // user login via user login api
            const res = await UserAPI.login(payload);

            if (res.data){
                console.log('login success', res.data);
                localStorage.setItem('token', res.data.token);
                commit('loginSuccess', res.data);

                // update carts
                store.dispatch('cart/updateCarts', res.data.user_id);

                router.push('/');
            }else{
                commit('loginFailure');
            }

        },

        logout({ commit }) {
            localStorage.removeItem('token');
            commit('logout');
            store.dispatch('cart/clearCarts');
            router.push('/');
        }

    },
    mutations: {
        loginSuccess(state, user) {
            state.status = { isLogin: true };
            state.username = user.user_name;
            state.user_id = user.user_id;
        },
        loginFailure(state) {
            state.status = { isLogin: false };
            state.username = null;
            state.user_id = null;
        },
        logout(state) {
            state.status = { isLogin: false };
            state.username = null;
            state.user_id = null;
        }
    }
}
