import UserAPI from '@/api/user'
import {router} from '@/router'
import {store} from '@/store'
import Vue from 'vue'

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
            try{
                // user login via user login api
                const res = await UserAPI.login(payload);
                console.log('login success', res.data);
                localStorage.setItem('token', res.data.token);
                commit('loginSuccess', res.data);

                // update carts
                store.dispatch('cart/getCartsByUserId', res.data.user_id);

                Vue.prototype.$notice.success({
                    title: 'Login Success',
                    description: 'Enjoy your shopping!'
                })

                router.push('/'); 
            }catch(e){
                console.log(e)
                Vue.prototype.$notice.error({
                    title: 'Login Failure',
                    description: 'Please Check Your Email and Password!'
                })
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
