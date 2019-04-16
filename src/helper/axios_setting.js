import axios from 'axios'

const API_ENDPOINT = 'http://localhost:3000/api/v1/'

axios.defaults.baseURL = API_ENDPOINT

export default axios