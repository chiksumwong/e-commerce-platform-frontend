import Vue from 'vue'    
    
const UserAPI = {
    register : payload => Vue.prototype.$axios.post('/register', payload),
    login: (payload) => Vue.prototype.$axios.post('/login', payload),
    getUserById: (userId) => Vue.prototype.$axios.get('/user/' + userId)
}

export default UserAPI