import Vue from 'vue'    
    
const OrderAPI = {
    addOrder: (payload) => Vue.prototype.$axios.post('/order', payload),
    getOrderByUserId: (userId) => Vue.prototype.$axios.get('/orders/' + userId)
}

export default OrderAPI