import Vue from 'vue';

class AccountAPI {
    login = (params) => Vue.prototype.$axios.post('/user/login', params);

    register = (params) => Vue.prototype.$axios.post('/user/register', params)
    
    getUserById = (userId) => Vue.prototype.$axios.get('/user/' + userId);
}

export default new AccountAPI();