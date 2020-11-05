import Vue from 'vue'    
    
const OrderAPI = {
    addOrder: (payload) => Vue.prototype.$axios.post('/order', payload),
    //update order_states in products by product_id
    updateOrderStates: (productId, payload) => Vue.prototype.$axios.put('/order/' + productId, payload),
    // get all orders of buyer
    getOrdersByBuyerId: (userId) => Vue.prototype.$axios.get('/orders/' + userId),
    // get all products from different orders for seller to deliver product
    getProductsOrdersBySellerId: (sellerId) => Vue.prototype.$axios.get('/productsOrders/' + sellerId)
    
}

export default OrderAPI