// import UserAPI from '@/api/User'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
    ? { status: { isLogin: true }, user }
    : { status: {}, user: null };

export const users = {
    namespaced: true,
    state: initialState,
    actions: {
        async login({ commit }, { email, password }) {

            // user login via user login api
            const params = {
                email: email,
                password: password
            }
            // const res = await UserAPI.login(params);

            const res = this.$ajax({
                method: 'post',
                url: 'http://localhost:3000/api/v1/login',
                data: {
                  email: 'Sam',
                  password: '1234'
                }
             })

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
