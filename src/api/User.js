class UserAPI {
    // login = (payload) => this.axios.post('/user/login', payload)

    register = (payload) => this.axios.post('/user/register', payload)
    
    // getUserById = (userId) => this.axios.get('/user/' + userId)
}

export default new UserAPI()