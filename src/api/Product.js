import Vue from 'vue'    
    
const ProductAPI = {
    getAllProduct: () => Vue.prototype.$axios.get('/products'),
    getProductById: (productId) => Vue.prototype.$axios.get('/product/' + productId),
    addProductToCart: (payload) => Vue.prototype.$axios.post('/cart', payload)
}

export default ProductAPI