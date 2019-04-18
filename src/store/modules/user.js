import UserAPI from '@/api/User'
import {router} from '@/router'
import {store} from '@/store'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
    ? { status: { isLogin: true }, username:user.user_name, user_id:user.user_id }
    : { status: {}, username: null, user_id:null };

export default {
    namespaced: true,
    state: initialState,
    actions: {

        async login({ commit }, payload) {

            // user login via user login api
            const res = await UserAPI.login(payload);

            if (res.data){
                console.log('login success', res.data);
                localStorage.setItem('user', JSON.stringify(res.data));
                commit('loginSuccess', res.data);

                // update carts
                store.dispatch('cart/updateCarts', res.data.user_id);

                router.push('/');
            }else{
                commit('loginFailure');
            }

        },

        logout({ commit }) {
            localStorage.removeItem('user');
            commit('logout');
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
            state.username = { isLogin: false };
            state.user_id = null;
        }
    }
}
