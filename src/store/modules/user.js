import UserAPI from '@/api/User'
import {router} from '@/router'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
    ? { status: { isLogin: true }, username:user.user_name }
    : { status: {}, username: null };

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
