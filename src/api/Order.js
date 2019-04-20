import Vue from 'vue'    
    
const OrderAPI = {
    addOrder: (payload) => Vue.prototype.$axios.post('/order', payload),
}

export default OrderAPI