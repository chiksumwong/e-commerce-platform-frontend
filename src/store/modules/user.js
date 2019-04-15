import UserAPI from '@/api/User'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
    ? { status: { isLogin: true }, user }
    : { status: {}, user: null };

export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, { email, password }) {

            // user login via user login api
            const params = {
                email: email,
                password: password
            }
            const res = await UserAPI.login(params);

            if (res.data.result){
                commit('loginSuccess', user);
                localStorage.setItem('user', JSON.stringify(user));
                this.$route.push('/');
            }else{
                commit('loginFailure', res.data.error_message);
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
