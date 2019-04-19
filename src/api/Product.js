import Vue from 'vue'    
    
const ProductAPI = {
    getAllProduct: () => Vue.prototype.$axios.get('/products'),
    getProductById: (productId) => Vue.prototype.$axios.get('/product/' + productId),
    addProductToCart: (payload) => Vue.prototype.$axios.post('/cart', payload),
    updateProductInCart: (userId, payload) => Vue.prototype.$axios.put('/cart/' + userId, payload)
}

export default ProductAPI