import Vue from 'vue'    
    
const OrderAPI = {
    addOrder: (payload) => Vue.prototype.$axios.post('/order', payload),
    getOrderByUserId: (userId) => Vue.prototype.$axios.get('/orders/' + userId),
    getOrderBySellerId: (sellerId) => Vue.prototype.$axios.get('/productOrders/' + sellerId),
    updateOrderStates: (orderId, payload) => Vue.prototype.$axios.put('/order/' + orderId, payload)
}

export default OrderAPI