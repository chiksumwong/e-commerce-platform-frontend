import Vue from 'vue'    
    
const OrderAPI = {
    addOrder: (payload) => Vue.prototype.$axios.post('/order', payload),
    getOrderByUserId: (userId) => Vue.prototype.$axios.get('/orders/' + userId),
    getOrderBySellerId: (sellerId) => Vue.prototype.$axios.get('/productOrders/' + sellerId),
    //update order_states in products by product_id
    updateOrderStates: (productId, payload) => Vue.prototype.$axios.put('/order/' + productId, payload)
}

export default OrderAPI