import UserAPI from '@/api/User'
import {router} from '@/router'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
    ? { status: { isLogin: true }, user }
    : { status: {}, user: null };

export default {
    namespaced: true,
    state: initialState,
    actions: {
        async login({ commit }, payload) {

            // user login via user login api
            const res = await UserAPI.login(payload);

            if (res.data){
                commit('loginSuccess', res.data);
                console.log('login success', res.data)
                localStorage.setItem('user', JSON.stringify(res.data));
                router.push('/')
            }else{
                commit('loginFailure');
            }

        },

        logout({ commit }) {
            localStorage.removeItem('user');
            commit('logout');
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status = { isLogin: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = { isLogin: false };
            state.user = null;
        },
        logout(state) {
            state.status = { isLogin: false };
            state.user = null;
        }
    }
}
