import Vue from 'vue'    
    
const ProductAPI = {
    createProduct: (payload) => Vue.prototype.$axios.post('/product', payload),
    getAllProduct: () => Vue.prototype.$axios.get('/products'),
    getProductById: (productId) => Vue.prototype.$axios.get('/product/' + productId),
    updateProductById: (productId, payload) => Vue.prototype.$axios.put('/product/' + productId, payload),
    deleteProductById: (productId) => Vue.prototype.$axios.delete('/product/' + productId),

    addProductToCart: (payload) => Vue.prototype.$axios.post('/cart', payload),
    updateProductInCart: (userId, payload) => Vue.prototype.$axios.put('/cart/' + userId, payload),
    getProductByUserId: (userId) => Vue.prototype.$axios.get('/products/' + userId)
}

export default ProductAPI